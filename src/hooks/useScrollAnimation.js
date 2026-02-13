import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation — додає клас 'animated' коли елемент потрапляє у viewport.
 * Використовує IntersectionObserver.
 * 
 * Використання:
 *   const ref = useScrollAnimation();
 *   <div ref={ref} data-animate="fade-in">...</div>
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Знаходимо всі елементи з data-animate всередині (або сам елемент)
    const targets = el.querySelectorAll('[data-animate]');
    if (targets.length === 0 && el.hasAttribute('data-animate')) {
      targets = [el];
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return ref;
};

/**
 * Глобальний ініціалізатор — підключається один раз в App.
 * Спостерігає за ВСІМА [data-animate] елементами на сторінці.
 */
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  // Спостерігаємо за всіма data-animate елементами
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });

  // Для динамічно доданих елементів
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.hasAttribute('data-animate')) {
            observer.observe(node);
          }
          node.querySelectorAll?.('[data-animate]')?.forEach((child) => {
            observer.observe(child);
          });
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
};
