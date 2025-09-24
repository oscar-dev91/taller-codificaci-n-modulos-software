import { useState } from "react";
import { CheckCircle, Cpu, Activity, Database, Camera } from "lucide-react";

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Pruebas de Software - BancoDemoApp</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          <Camera className="w-4 h-4 mr-2" /> Ver Screenshots
        </button>
      </header>

      {/* Hero */}
      <section className="p-12 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Calidad y Confiabilidad en Soluciones Bancarias</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Una solución de software es un conjunto de elementos que administran datos e información.
          Para garantizar su éxito, las pruebas de software son indispensables. Aquí encontrarás los
          fundamentos, tipos de pruebas y ejemplos prácticos aplicados a nuestro proyecto bancario con Django.
        </p>
      </section>

      {/* Tipos de pruebas */}
      <section className="p-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center text-xl font-semibold mb-4"><Cpu className="mr-2" /> Tipos de pruebas</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> <b>Unitarias:</b> verifican componentes individuales. Beneficio: detectar errores temprano.</li>
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> <b>Integración:</b> prueban interacción entre módulos. Beneficio: previenen fallos en comunicación.</li>
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> <b>Funcionales:</b> validan requisitos de negocio. Beneficio: aseguran valor al usuario.</li>
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> <b>Rendimiento:</b> evalúan estabilidad bajo carga. Beneficio: previenen caídas.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center text-xl font-semibold mb-4"><Activity className="mr-2" /> Adaptación al proyecto</h3>
          <p>
            Nuestro sistema bancario requiere alta confiabilidad:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Unitarias: depósitos, retiros, transferencias.</li>
            <li>Integración: autenticación JWT, creación de cuentas.</li>
            <li>Funcionales: escenarios completos de cliente.</li>
            <li>Estrés: con Locust o JMeter para múltiples clientes.</li>
          </ul>
        </div>
      </section>

      {/* Herramienta y resumen */}
      <section className="p-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center text-xl font-semibold mb-4"><Database className="mr-2" /> Herramienta de pruebas</h3>
          <p>
            Se utilizó <b>Django Test + DRF APIClient</b>, que permite simular llamadas HTTP,
            validar roles y autenticar usuarios con JWT. Esta herramienta oficial es ligera,
            confiable y extensible. Como alternativa, se recomienda <b>pytest-django</b> para
            mayor flexibilidad.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center text-xl font-semibold mb-4"><CheckCircle className="mr-2" /> Resumen de pruebas</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Seguridad: login y validación de tokens.</li>
            <li>Gestión de cuentas: creación y consulta.</li>
            <li>Transacciones: depósitos, retiros, transferencias, cancelaciones.</li>
            <li>Reportes y auditoría: transacciones y logs.</li>
            <li>Excepciones: saldos insuficientes, errores controlados.</li>
          </ul>
        </div>
      </section>

      {/* Modal screenshots */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-semibold mb-4">Screenshots de Pruebas</h3>
            <div className="grid grid-cols-1 gap-4">
              <img src="/screenshots/1.png" alt="Test unitario" className="rounded shadow" />
            </div>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">✕</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-100 text-sm text-gray-600">
        © 2025 BancoDemoApp - Taller de Pruebas de Software
      </footer>
    </div>
  );
}
