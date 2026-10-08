"use client";

import { useMemo, useState } from "react";
import { Settings, Bell, Shield, Globe } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import { useLocalStorageValue, writeLocalStorageValue } from "@/hooks/useLocalStorageValue";

const STORAGE_KEY = "koreaverse.preferences.v1";

export default function SettingsPage() {
  const storedPreferences = useLocalStorageValue(STORAGE_KEY);
  const [storageError, setStorageError] = useState("");
  const preferences = useMemo(() => {
    try { return storedPreferences ? JSON.parse(storedPreferences) as { notifications?: boolean; emailUpdates?: boolean } : {}; }
    catch { return {}; }
  }, [storedPreferences]);
  const notifications = preferences.notifications ?? true;
  const emailUpdates = preferences.emailUpdates ?? true;

  function savePreferences(next: { notifications: boolean; emailUpdates: boolean }) {
    try { writeLocalStorageValue(STORAGE_KEY, JSON.stringify(next)); setStorageError(""); }
    catch { setStorageError("This browser could not save your preferences."); }
  }

  return (
    <>
      <PageBanner
        badge="Dashboard"
        title={
          <>
            Account <span className="text-gradient">Settings</span>
          </>
        }
        description="Manage your account preferences and notifications."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            {storageError && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm text-rose-800">{storageError}</p>}
            <FadeIn>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                    <Bell size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                    <div>
                      <p className="font-semibold text-slate-800">Resource reminder preference</p>
                      <p className="text-sm text-slate-500">Saved locally; browser push delivery is not configured</p>
                    </div>
                    <button
                      onClick={() => savePreferences({ notifications: !notifications, emailUpdates })}
                      role="switch"
                      aria-checked={notifications}
                      aria-label="Resource reminder preference"
                      className={`relative h-7 w-12 rounded-full transition ${notifications ? "bg-blue-600" : "bg-slate-300"}`}
                    >
                      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${notifications ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                    <div>
                      <p className="font-semibold text-slate-800">Newsletter preference</p>
                      <p className="text-sm text-slate-500">Saved locally; email delivery is not configured</p>
                    </div>
                    <button
                      onClick={() => savePreferences({ notifications, emailUpdates: !emailUpdates })}
                      role="switch"
                      aria-checked={emailUpdates}
                      aria-label="Newsletter preference"
                      className={`relative h-7 w-12 rounded-full transition ${emailUpdates ? "bg-blue-600" : "bg-slate-300"}`}
                    >
                      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${emailUpdates ? "left-6" : "left-1"}`} />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Security</h2>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                  <div>
                    <p className="font-semibold text-slate-800">Password</p>
                    <p className="text-sm text-slate-500">Password management requires an account provider.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                    <Globe size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Language & Region</h2>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-800">Preferred Language</p>
                  <p className="mt-1 text-sm text-slate-500">English</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
