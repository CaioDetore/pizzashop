import { Helmet } from "react-helmet-async";

import { Pagination } from "@/components/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { OrderTableFilter } from "./order-table-filters";
import { OrderTableRow } from "./order-table-row";

export function Orders() {
  return (
    <>
      <Helmet title="pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[100px]">Realizado há</TableHead>
                  <TableHead className="w-[148px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[148px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />;
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} perPage={1} totalCount={11} />
        </div>
      </div>
    </>
  );
}
