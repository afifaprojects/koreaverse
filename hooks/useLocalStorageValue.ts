"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_EVENT = "koreaverse:local-storage";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(STORAGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(STORAGE_EVENT, onStoreChange);
  };
}

export function useLocalStorageValue(key: string) {
  const getSnapshot = useCallback(() => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }, [key]);

  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}

export function writeLocalStorageValue(key: string, value: string) {
  window.localStorage.setItem(key, value);
  window.dispatchEvent(new Event(STORAGE_EVENT));
}
