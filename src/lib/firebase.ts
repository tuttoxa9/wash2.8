// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"; // Добавлено для работы с базой данных Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmM2Cnrm7BN8_QX-cZwsGTRkYoBIwEkZI",
  authDomain: "wash-aee4d.firebaseapp.com",
  projectId: "wash-aee4d",
  storageBucket: "wash-aee4d.firebasestorage.app",
  messagingSenderId: "1088523007457",
  appId: "1:1088523007457:web:d0e150b782bf1d29a10ea0",
  measurementId: "G-B1P8GLHGHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация Firestore с правильными настройками
const db = getFirestore(app);

// Применяем настройки для лучшей производительности
// В Firebase v9+ настройки применяются при создании экземпляра
// но добавим дополнительные опции для лучшей стабильности
// Нельзя напрямую присвоить db.settings, нужно использовать метод
try {
  // Для отладки можно использовать эмулятор
  // connectFirestoreEmulator(db, 'localhost', 8080);

  console.log("Firebase настроен с проектом:", firebaseConfig.projectId);
} catch (error) {
  console.error("Ошибка при инициализации Firebase:", error);
}

export { db, analytics, app }; // Экспортируем app для использования в других местах
