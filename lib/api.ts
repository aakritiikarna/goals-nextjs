const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function fetchCoaches() {
  const res = await fetch(`${API_BASE}/coaches/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch coaches');
  return res.json();
}

export async function fetchPrograms(type?: 'main' | 'specialty') {
  const url = type ? `${API_BASE}/programs/?type=${type}` : `${API_BASE}/programs/`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch programs');
  return res.json();
}

export async function fetchAchievements() {
  const res = await fetch(`${API_BASE}/achievements/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch achievements');
  return res.json();
}

export async function fetchPlayerSpotlights() {
  const res = await fetch(`${API_BASE}/player-spotlights/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch player spotlights');
  return res.json();
}

export async function fetchTestimonials(type?: 'parent' | 'player') {
  const url = type ? `${API_BASE}/testimonials/?type=${type}` : `${API_BASE}/testimonials/`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch testimonials');
  return res.json();
}

export async function submitRegistration(formData: FormData) {
  const res = await fetch(`${API_BASE}/register/`, {
    method: 'POST',
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

export async function submitContact(payload: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
