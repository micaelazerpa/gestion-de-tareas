import { ClipboardDocumentListIcon, ChevronRightIcon, PencilIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ClipboardDocumentListIcon },
]

export default function TaskPage() {
  return (
    <>
    <div >
      <div className="mt-5 flex max-w-max -translate-x-1/3 px-4">
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <ClipboardDocumentListIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              <Link
                href="/"
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                Ver
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <PencilIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                Editar
              </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
