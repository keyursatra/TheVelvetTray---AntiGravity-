import { PrismaClient } from "@prisma/client";
import { 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function getAdminData() {
  const session = await getServerSession(authOptions);
  
  // Security Guard: Redirect if not logged in
  if (!session) {
    redirect("/login");
  }

  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  });
  
  const totalInquiries = await prisma.inquiry.count();
  const totalProducts = await prisma.hamper.count();
  
  return { inquiries, totalInquiries, totalProducts };
}

export default async function AdminDashboard() {
  const { inquiries, totalInquiries, totalProducts } = await getAdminData();

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Sidebar Overlay (Simplified for MVP) */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-border p-8 z-10 hidden lg:block">
        <Link href="/" className="block mb-12">
          <span className="text-xl font-serif tracking-widest uppercase text-crimson">Velvet Admin</span>
        </Link>
        <div className="space-y-6">
          <Link href="/admin" className="flex items-center gap-3 text-crimson font-medium">
            <TrendingUp className="w-4 h-4" /> Overview
          </Link>
          <Link href="/admin/inventory" className="flex items-center gap-3 text-text-secondary hover:text-crimson transition-colors">
            <ShoppingBag className="w-4 h-4" /> Inventory
          </Link>
          <Link href="/admin/inquiries" className="flex items-center gap-3 text-text-secondary hover:text-crimson transition-colors">
            <MessageSquare className="w-4 h-4" /> Inquiries
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-3xl font-serif mb-2">Performance Overview</h1>
              <p className="text-text-secondary text-sm">Welcome back. Here is what's happening with The VelvetRay today.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-white border border-border text-xs uppercase tracking-widest hover:bg-bg-warm transition-colors">Export Data</button>
              <Link href="/admin/inventory/new" className="px-6 py-2 bg-crimson text-white text-xs uppercase tracking-widest hover:bg-black transition-colors">Add Hamper</Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Inquiries', value: totalInquiries, icon: MessageSquare, trend: '+12%' },
              { label: 'Active Hampers', value: totalProducts, icon: ShoppingBag, trend: 'Stable' },
              { label: 'User Registrations', value: '154', icon: Users, trend: '+5%' },
              { label: 'Avg. Order Value', value: '₹12,400', icon: TrendingUp, trend: '+8%' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 border border-border rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-bg-warm flex items-center justify-center text-crimson">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{stat.trend}</span>
                </div>
                <span className="text-xs text-text-secondary uppercase tracking-widest mb-1 block">{stat.label}</span>
                <span className="text-2xl font-serif">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Recent Inquiries Table */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h3 className="font-serif text-lg">Recent Corporate Leads</h3>
              <Link href="/admin/inquiries" className="text-[10px] uppercase tracking-widest text-crimson font-bold">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-bg-warm">
                  <tr className="text-[10px] uppercase tracking-widest text-text-secondary border-b border-border">
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Quantity</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-bg-warm transition-colors group">
                      <td className="px-6 py-4">
                        <span className="font-medium text-sm block">{inquiry.companyName}</span>
                        <span className="text-[10px] text-text-secondary uppercase tracking-tighter">{inquiry.occasion}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary">{inquiry.email}</td>
                      <td className="px-6 py-4 text-sm font-medium">{inquiry.quantity}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-orange-500" />
                          <span className="text-[10px] uppercase tracking-widest font-bold text-orange-600">Pending Review</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-text-secondary">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-white rounded-full transition-colors">
                          <MoreVertical className="w-4 h-4 text-text-secondary" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
