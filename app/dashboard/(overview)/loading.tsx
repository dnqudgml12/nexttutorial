import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}

//이게 customers, invoices의 page.tsx보다 상위에 있기 때문에 이 페이지 들에도 자동적용
//근데 지금 (overview)하면 loading 페이지가 dashboard에만 적용