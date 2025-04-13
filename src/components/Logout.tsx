'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
function Logout() {
  return (
    <div className="flex items-center gap-2" onClick={() => signOut()}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </div>
  );
}

export default Logout;
