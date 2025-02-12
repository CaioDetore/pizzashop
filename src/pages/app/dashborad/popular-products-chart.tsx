import { BarChart } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import colors from "tailwindcss/colors";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { nome: "Pepperoni", amount: 80 },
  { nome: "Mussarela", amount: 100 },
  { nome: "Marguerita", amount: 80 },
  { nome: "4 Queijos", amount: 120 },
  { nome: "Portuguesa", amount: 100 },
];

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];
export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Pedidos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              name="product"
              dataKey="amount"
              strokeWidth={8}
              outerRadius={86}
              innerRadius={64}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data[index].nome.length > 12
                      ? data[index].nome.substring(0, 12).concat("...")
                      : data[index].nome}{" "}
                    ({value})
                  </text>
                );
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
