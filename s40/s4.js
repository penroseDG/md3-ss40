const localStorageKeys = Object.keys(localStorage);
for (let i = 0; i < localStorageKeys.length; i++) {
  const key = localStorageKeys[i];
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
