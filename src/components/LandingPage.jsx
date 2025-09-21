import { useState } from "react";
import { CheckCircle, Code2, Database, PlayCircle, ClipboardList } from "lucide-react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Taller: Pruebas de Software
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Una solución de software debe garantizar calidad y confiabilidad.
          Este taller explora los tipos de pruebas y su aplicación práctica en
          un proyecto Django de banca digital.
        </p>
      </header>

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Tipos de pruebas */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <ClipboardList className="w-6 h-6 text-indigo-600" />
            Tipos de pruebas de software
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <p>
                <strong>Unitarias:</strong> Validan unidades pequeñas (funciones/clases). Rápidas y fáciles de automatizar.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <p>
                <strong>Integración:</strong> Comprueban que varios módulos interactúan correctamente.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <p>
                <strong>Funcionales:</strong> Validan requisitos de negocio (flujo del usuario).
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <p>
                <strong>De rendimiento/estrés:</strong> Miden comportamiento bajo carga.
              </p>
            </li>
          </ul>
        </section>

        {/* Adaptación al proyecto */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-indigo-600" />
            Adaptación al proyecto Django
          </h2>
          <p className="mb-4">
            En el sistema bancario (Django + DRF) convienen:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unitarias:</strong> depósitos, retiros, validaciones de saldo.
            </li>
            <li>
              <strong>Integración:</strong> autenticación, APIs y DB.
            </li>
            <li>
              <strong>Funcionales:</strong> flujos cliente/operador.
            </li>
          </ul>
        </section>

        {/* Herramienta usada */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-indigo-600" />
            Herramienta utilizada
          </h2>
          <p>
            Se usó <strong>Django test + DRF APITestCase/APIClient</strong> para simular usuarios y transacciones.
          </p>
        </section>

        {/* Resumen de pruebas */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <PlayCircle className="w-6 h-6 text-indigo-600" />
            Resumen de pruebas y capturas
          </h2>
          <p className="mb-4">
            Se cubrieron creación de usuarios, gestión de cuentas, depósitos, retiros, transferencias, listados y reportes.
          </p>

          {/* Galería de capturas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            <img
              src="/screenshots/1.png"
              alt="captura1"
              className="rounded shadow-sm cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </section>
      </main>

      {/* Modal para screenshot expandido */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/screenshots/1.png"
              alt="Screenshot expandido"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl transition-transform duration-300"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© 2025 Taller de Pruebas de Software | Proyecto Django BancoDemoApp</p>
      </footer>
    </div>
  );
}
