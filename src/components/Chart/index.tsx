import { Card } from 'antd'
import { memo } from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts'

const CustomTooltip = ({ active, payload }: any) => {
      if (active && payload && payload.length) {
            return (
                  <div
                        style={{
                              backgroundColor: 'black',
                              opacity: '0.75',
                              padding: '0.5rem',
                              color: 'white',
                              display: 'flex',
                              margin: 'auto',
                              gap: '12px',
                        }}
                  >
                        <p>{payload[0]?.name}</p>
                        <p>{payload[0]?.value}</p>
                  </div>
            )
      }

      return null
}

export const Chart = memo(({ cryptos }: { cryptos: any[] }) => {
      return (
            <Card style={{ height: 'auto' }}>
                  <ResponsiveContainer width="100%" height={340}>
                        <PieChart style={{ margin: 'auto' }}>
                              <Pie
                                    dataKey="value"
                                    data={cryptos}
                                    outerRadius={100}
                                    innerRadius={60}
                                    fill="#fff"
                                    label
                              />
                              <Tooltip content={CustomTooltip} />
                        </PieChart>
                  </ResponsiveContainer>
            </Card>
      )
})
