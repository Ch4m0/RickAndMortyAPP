'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './search.module.scss'
const WAIT_BETWEEN_SEARCHES = 300

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathName}?${params.toString()}`);

  }, WAIT_BETWEEN_SEARCHES);

  return (
    <div className={styles.searchBar}>
      <label className={styles.searchBar__label}  htmlFor="search">
        Search by name
      </label>
      <input
        className={styles.searchBar__input}
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString() || ''}
      />
    </div>
  );
}
