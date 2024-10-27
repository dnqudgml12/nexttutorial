import SideNav from '@/app/ui/dashboard/sidenav';
export const experimental_ppr = true;
//Partial Prerendering 이 가능하게 하였고 우리가 Suspense로 dynamic부분을 감싸면 자동으로 PPR이 되면서
//next.js가 자동으로 dynamic 부분을 안다
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div> 
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}