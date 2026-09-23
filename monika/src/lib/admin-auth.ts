export const ADMIN_UID = "admin";
export const ADMIN_PASSWORD = "admin@2026";
export const ADMIN_SESSION_KEY = "monika-admin-session";

export type AdminSession = {
  uid: string;
  name: string;
  loggedInAt: string;
};

export function validateAdminLogin(uid: string, password: string): boolean {
  return uid.trim() === ADMIN_UID && password === ADMIN_PASSWORD;
}

export function readAdminSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AdminSession;
  } catch {
    return null;
  }
}

export function writeAdminSession(session: AdminSession) {
  window.localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  window.localStorage.removeItem(ADMIN_SESSION_KEY);
}
