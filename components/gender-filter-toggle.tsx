'use client';

import { useAtom } from 'jotai';
import { genderAtom, Gender } from '@/lib/atoms';
import { Button } from '@/components/ui/button';

export function GenderFilterToggle() {
  const [gender, setGender] = useAtom(genderAtom);

  const genders: Gender[] = ['Male', 'Female', 'Unisex'];

  return (
    <div className="flex flex-wrap gap-3">
      {genders.map((g) => (
        <Button
          key={g}
          onClick={() => setGender(gender === g ? null : g)}
          variant={gender === g ? 'default' : 'outline'}
          className="px-6 py-2 text-sm font-medium transition-all"
        >
          {g}
        </Button>
      ))}
    </div>
  );
}
