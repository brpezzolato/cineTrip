'use client';

import { useEffect } from 'react';

/** Carrega o JS do Bootstrap (carrossel, modal, collapse, accordion) a partir do pacote npm. */
export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return null;
}
