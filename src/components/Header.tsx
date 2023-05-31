import { createSignal, createEffect } from 'solid-js';

export default function Header(props) {
  return (
    <section>
      <div class="flex gap-2">
        <button onClick={() => props.setDarkMode((prev) => !prev)}>
          {props.darkMode() ? 'Light' : 'Dark'}
        </button>
      </div>
    </section>
  );
}
