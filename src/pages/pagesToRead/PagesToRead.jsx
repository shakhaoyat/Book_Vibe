import React, { useContext, useMemo } from 'react';
import {
      Bar,
      BarChart,
      Cell,
      CartesianGrid,
      LabelList,
      Legend,
      ResponsiveContainer,
      Tooltip,
      XAxis,
      YAxis,
} from 'recharts';
import { BookContext } from '../../context/BookContext';

const getPath = (x, y, width, height) => {
      return `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
      ${x + width}, ${y + height}
      Z`;
};

const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const wishColors = ['#0EA5E9', '#14B8A6', '#F59E0B', '#F97316', '#EF4444', '#A855F7', '#6366F1'];

const formatBookName = (bookName = '') => {
      if (bookName.length <= 15) return bookName;
      return `${bookName.slice(0, 15)}...`;
};

const PagesToRead = () => {
      const { wishList } = useContext(BookContext);

      const chartData = useMemo(() => {
            return wishList
                  .map((book) => ({
                        name: formatBookName(book.bookName),
                        wishPages: Number(book.totalPages) || 0,
                  }))
                  .sort((a, b) => b.wishPages - a.wishPages);
      }, [wishList]);

      return (
            <div className="container mx-auto my-10 px-4">
                  {/* Heading */}
                  <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800">
                              Pages to Read
                        </h1>
                        <p className="mt-2 text-gray-500">
                              Overview of your wish list books with total pages.
                        </p>
                  </div>

                  {/* Empty State */}
                  {chartData.length === 0 ? (
                        <div className="flex h-[50vh] items-center justify-center rounded-2xl bg-gray-100 shadow">
                              <h2 className="text-2xl font-semibold text-gray-500">
                                    No books added to wish list yet
                              </h2>
                        </div>
                  ) : (
                        <div className="h-[75vh] rounded-2xl bg-gray-50] p-6 shadow-md">
                              <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                          data={chartData}
                                          margin={{ top: 40, right: 20, left: 10, bottom: 70 }}
                                    >
                                          <CartesianGrid strokeDasharray="4 4" stroke="#d7cfcf" />

                                          <XAxis
                                                dataKey="name"
                                                angle={0}
                                                textAnchor="middle"
                                                interval={0}
                                                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                                                tickLine={false}
                                                axisLine={false}
                                          />

                                          <YAxis
                                                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                                                tickLine={false}
                                                axisLine={false}
                                                domain={[0, 'dataMax + 20']}
                                          />

                                          <Tooltip
                                                contentStyle={{
                                                      borderRadius: '10px',
                                                      border: 'none',
                                                }}
                                          />

                                          <Legend
                                                wrapperStyle={{
                                                      paddingBottom: '16px',
                                                }}
                                          />

                                          <Bar
                                                dataKey="wishPages"
                                                name="Wish List"
                                                shape={<TriangleBar />}
                                                barSize={32}
                                          >
                                                {chartData.map((entry, index) => (
                                                      <Cell
                                                            key={`wish-cell-${entry.name}`}
                                                            fill={wishColors[index % wishColors.length]}
                                                      />
                                                ))}

                                                <LabelList
                                                      dataKey="wishPages"
                                                      position="top"
                                                      style={{
                                                            fill: '#6B7280',
                                                            fontSize: 12,
                                                            fontWeight: 600,
                                                      }}
                                                />
                                          </Bar>
                                    </BarChart>
                              </ResponsiveContainer>
                        </div>
                  )}
            </div>
      );
};

export default PagesToRead;