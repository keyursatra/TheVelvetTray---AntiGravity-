import { PrismaClient } from "@prisma/client";
import { 
  ShoppingBag, 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  ExternalLink 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

async function getInventory() {
  return await prisma.hamper.findMany({
    include: { collection: true },
    orderBy: { createdAt: 'desc' }
  });
}

export default async function InventoryPage() {
  const products = await getInventory();

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Sidebar Overlay */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-border p-8 z-10 hidden lg:block">
        <Link href="/" className="block mb-12">
          <span className="text-xl font-serif tracking-widest uppercase text-crimson">Velvet Admin</span>
        </Link>
        <div className="space-y-6">
          <Link href="/admin" className="flex items-center gap-3 text-text-secondary hover:text-crimson transition-colors font-medium">
            <Filter className="w-4 h-4" /> Overview
          </Link>
          <Link href="/admin/inventory" className="flex items-center gap-3 text-crimson font-medium">
            <ShoppingBag className="w-4 h-4" /> Inventory
          </Link>
          <Link href="/admin/inquiries" className="flex items-center gap-3 text-text-secondary hover:text-crimson transition-colors">
            <Search className="w-4 h-4" /> Inquiries
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-3xl font-serif mb-2">Inventory Management</h1>
              <p className="text-text-secondary text-sm">Manage your signature hampers, pricing, and provenance details.</p>
            </div>
            <Link href="/admin/inventory/new" className="btn-primary flex items-center gap-2 py-2 px-6">
              <Plus className="w-4 h-4" /> Add New Hamper
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm group">
                <div className="relative aspect-video">
                  <Image 
                    src={product.image || '/hero-main.png'} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:text-crimson transition-colors">
                      <Edit3 className="w-3 h-3" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:text-red-600 transition-colors">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] uppercase tracking-widest font-bold bg-crimson text-white px-2 py-1 rounded-sm">
                      {product.tier}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-serif">{product.name}</h3>
                    <span className="text-sm font-semibold text-text-primary">₹{product.price.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-4">Origin: {product.origin}</p>
                  <p className="text-sm text-text-secondary line-clamp-2 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-green-600">Active on Storefront</span>
                    </div>
                    <Link href={`/hampers/${product.slug}`} className="text-[10px] uppercase tracking-widest flex items-center gap-1 hover:text-crimson font-bold">
                      View Live <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
