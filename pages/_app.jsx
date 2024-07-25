// app.jsx
import './styles/global.css';  // Додаємо глобальні стилі
import './styles/styles.module.scss'; // Імпорт ваших модульних стилів

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
