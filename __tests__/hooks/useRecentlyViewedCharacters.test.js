import { renderHook } from '@testing-library/react-hooks';
import useRecentlyViewedCharacters from '../../hooks/useRecentlyViewedCharacters';

describe('useRecentlyViewedCharacters', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear();
  });

  it('returns an empty array when localStorage is empty', () => {
    const { result } = renderHook(() => useRecentlyViewedCharacters());

    expect(result.current).toEqual([]);
  });

  it('returns formatted list from localStorage', () => {
    const recentlyViewedList = [
      { id: 1, photo: "photo1.jpg", personalData: { name: "Character 1" } },
      { id: 2, photo: "photo2.jpg", personalData: { name: "Character 2" } },
    ];
    localStorage.setItem("characters", JSON.stringify(recentlyViewedList));

    const { result } = renderHook(() => useRecentlyViewedCharacters());

    expect(result.current).toEqual([
      { id: 1, name: "Character 1", imageSrc: "photo1.jpg" },
      { id: 2, name: "Character 2", imageSrc: "photo2.jpg" },
    ]);
  });
});
