import { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Eye, DollarSign, MousePointer2, ArrowUpRight, ArrowDownRight, 
  Filter, Download, LayoutGrid, ListFilter, X 
} from 'lucide-react';

// --- DADOS FAKES (Meta & Google Ads) ---

// Dados completos por campanha
const allCampaignsData = [
  { 
    name: 'Promoção Verão', 
    platform: 'Meta Ads', 
    type: 'Conversão', 
    rate: 40, 
    cost: 'R$ 650,00',
    impressions: 45200,
    investment: 650.00,
    ctr: 3.2,
    performance: [
      { name: 'Out', value: 1200 },
      { name: 'Nov', value: 850 },
      { name: 'Dez', value: 1800 },
    ],
    leads: [
      { name: 'Dom', leads: 20 },
      { name: 'Seg', leads: 45 },
      { name: 'Ter', leads: 120 },
      { name: 'Qua', leads: 65 },
      { name: 'Qui', leads: 80 },
      { name: 'Sex', leads: 90 },
      { name: 'Sab', leads: 35 },
    ]
  },
  { 
    name: 'Search Institucional', 
    platform: 'Google Ads', 
    type: 'Search', 
    rate: 80, 
    cost: 'R$ 720,50',
    impressions: 52100,
    investment: 720.50,
    ctr: 4.1,
    performance: [
      { name: 'Out', value: 1600 },
      { name: 'Nov', value: 1300 },
      { name: 'Dez', value: 2100 },
    ],
    leads: [
      { name: 'Dom', leads: 18 },
      { name: 'Seg', leads: 50 },
      { name: 'Ter', leads: 150 },
      { name: 'Qua', leads: 75 },
      { name: 'Qui', leads: 85 },
      { name: 'Sex', leads: 95 },
      { name: 'Sab', leads: 40 },
    ]
  },
  { 
    name: 'Retargeting Catálogo', 
    platform: 'Meta Ads', 
    type: 'Catálogo', 
    rate: 20, 
    cost: 'R$ 432,25',
    impressions: 27150,
    investment: 432.25,
    ctr: 1.8,
    performance: [
      { name: 'Out', value: 800 },
      { name: 'Nov', value: 615 },
      { name: 'Dez', value: 1105 },
    ],
    leads: [
      { name: 'Dom', leads: 12 },
      { name: 'Seg', leads: 25 },
      { name: 'Ter', leads: 70 },
      { name: 'Qua', leads: 40 },
      { name: 'Qui', leads: 35 },
      { name: 'Sex', leads: 35 },
      { name: 'Sab', leads: 15 },
    ]
  },
];

const Dashboard = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  // Calcular dados filtrados baseado na campanha selecionada
  const filteredData = useMemo(() => {
    if (!selectedCampaign) {
      // Dados agregados de todas as campanhas
      return {
        impressions: 124450,
        investment: 3363.95,
        ctr: 2.85,
        performanceData: [
          { name: 'Out', Meta: 2988, Google: 4000, Other: 1200 },
          { name: 'Nov', Meta: 1765, Google: 3200, Other: 900 },
          { name: 'Dez', Meta: 4005, Google: 5100, Other: 1800 },
        ],
        leadsData: [
          { name: 'Dom', leads: 50 },
          { name: 'Seg', leads: 120 },
          { name: 'Ter', leads: 340 },
          { name: 'Qua', leads: 180 },
          { name: 'Qui', leads: 200 },
          { name: 'Sex', leads: 220 },
          { name: 'Sab', leads: 90 },
        ],
        totalLeads: 24473,
        budgetData: [
          { name: 'Meta Ads', value: 374.82, color: '#6366f1' },
          { name: 'Google Ads', value: 241.60, color: '#14b8a6' },
          { name: 'Outros', value: 213.42, color: '#e2e8f0' },
        ],
      };
    }

    // Dados da campanha específica
    const campaign = allCampaignsData.find(c => c.name === selectedCampaign);
    if (!campaign) return null;

    const totalLeads = campaign.leads.reduce((sum, day) => sum + day.leads, 0);

    return {
      impressions: campaign.impressions,
      investment: campaign.investment,
      ctr: campaign.ctr,
      performanceData: campaign.performance.map(p => ({
        name: p.name,
        [campaign.platform]: p.value,
      })),
      leadsData: campaign.leads,
      totalLeads: totalLeads,
      budgetData: [
        { name: campaign.platform, value: campaign.investment, color: campaign.platform.includes('Meta') ? '#6366f1' : '#14b8a6' },
      ],
    };
  }, [selectedCampaign]);

  const handleCampaignClick = (campaignName: string) => {
    setSelectedCampaign(campaignName === selectedCampaign ? null : campaignName);
  };

  const clearFilter = () => {
    setSelectedCampaign(null);
  };

  if (!filteredData) return null;
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-slate-800">
      
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Dashboard de Mídia</h1>
          {selectedCampaign && (
            <button 
              onClick={clearFilter}
              className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-colors"
            >
              <span>{selectedCampaign}</span>
              <X size={14} />
            </button>
          )}
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
            <span>Out 18 - Nov 18</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
            <Filter size={16} /> Filtro
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
            <Download size={16} /> Exportar
          </button>
        </div>
      </header>

      {/* TOP CARDS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1: Impressões (Page Views) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <Eye size={18} />
              Impressões Totais
            </div>
            <span className="text-gray-300 cursor-pointer">ⓘ</span>
          </div>
          <div className="flex items-end gap-3">
            <h2 className="text-3xl font-bold">{filteredData.impressions.toLocaleString('pt-BR')}</h2>
            <span className="flex items-center text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md mb-1">
              15.8% <ArrowUpRight size={12} className="ml-1" />
            </span>
          </div>
        </div>

        {/* Card 2: Investimento (Total Revenue) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <DollarSign size={18} />
              Investimento Total
            </div>
            <span className="text-gray-300 cursor-pointer">ⓘ</span>
          </div>
          <div className="flex items-end gap-3">
            <h2 className="text-3xl font-bold">R$ {filteredData.investment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
            <span className="flex items-center text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-md mb-1">
              34.0% <ArrowDownRight size={12} className="ml-1" />
            </span>
          </div>
        </div>

        {/* Card 3: CTR (Bounce Rate) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <MousePointer2 size={18} />
              CTR Médio
            </div>
            <span className="text-gray-300 cursor-pointer">ⓘ</span>
          </div>
          <div className="flex items-end gap-3">
            <h2 className="text-3xl font-bold">{filteredData.ctr}%</h2>
            <span className="flex items-center text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md mb-1">
              24.2% <ArrowUpRight size={12} className="ml-1" />
            </span>
          </div>
        </div>
      </div>

      {/* MIDDLE ROW: CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Main Chart (Left - 2/3 width) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <LayoutGrid size={18} className="text-gray-400" /> Visão Geral de Campanhas
              </h3>
              <p className="text-2xl font-bold mt-2">R$ 9,257.51 <span className="text-sm font-normal text-teal-600 ml-2">+R$ 143.50 investidos</span></p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-md text-xs font-medium hover:bg-gray-50">Filter</button>
              <button className="px-3 py-1 border rounded-md text-xs font-medium hover:bg-gray-50">Sort</button>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData.performanceData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                {!selectedCampaign ? (
                  <>
                    <Bar dataKey="Other" stackId="a" fill="#c7d2fe" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="Google" stackId="a" fill="#6366f1" />
                    <Bar dataKey="Meta" stackId="a" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                  </>
                ) : (
                  <Bar 
                    dataKey={Object.keys(filteredData.performanceData[0]).find(key => key !== 'name') || 'value'} 
                    fill={selectedCampaign?.includes('Meta') ? '#14b8a6' : '#6366f1'} 
                    radius={[4, 4, 4, 4]} 
                  />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-teal-500"></span> Meta Ads</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Google Ads</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-200"></span> Outros</div>
          </div>
        </div>

        {/* Secondary Chart (Right - 1/3 width) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                Total Leads
              </h3>
              <h2 className="text-3xl font-bold mt-2">{filteredData.totalLeads.toLocaleString('pt-BR')}</h2>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md inline-block mt-1">
                 8.3% ↗ +749 leads
              </span>
            </div>
            <button className="px-3 py-1 border rounded-md text-xs font-medium hover:bg-gray-50">Weekly</button>
          </div>

          <div className="h-48 w-full flex items-end justify-center">
             {/* Custom Bar Visual para imitar a referência (Uma barra destacada) */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData.leadsData}>
                <Bar dataKey="leads" radius={[4, 4, 4, 4]}>
                  {filteredData.leadsData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Ter' ? '#6366f1' : '#e2e8f0'} />
                  ))}
                </Bar>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={5} />
                <Tooltip cursor={{fill: 'transparent'}} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Donut Chart (Sales Distribution) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-700">Distribuição de Budget</h3>
            <button className="px-2 py-1 text-xs border rounded text-gray-500">Monthly</button>
          </div>
          
          <div className="flex flex-col gap-4">
             {/* Legenda Customizada imitando a ref */}
            <div className="flex justify-between text-sm">
                {filteredData.budgetData.slice(0, 2).map((item: any) => (
                   <div key={item.name} className="flex flex-col">
                      <span className="flex items-center gap-1 font-medium text-gray-500">
                        <span className="w-1 h-3 rounded-full" style={{backgroundColor: item.color}}></span>
                        {item.name}
                      </span>
                      <span className="font-bold text-lg ml-2">R$ {item.value}</span>
                   </div>
                ))}
            </div>

            <div className="h-48 w-full relative">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={filteredData.budgetData}
                    cx="50%"
                    cy="100%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    cornerRadius={5}
                  >
                    {filteredData.budgetData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {!selectedCampaign && (
                <div className="absolute bottom-0 right-0 text-right">
                    <p className="text-xs text-gray-400">Outros</p>
                    <p className="font-bold text-gray-700">R$ 213.42</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table (List of Integration) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
               <ListFilter size={18} /> Campanhas Ativas
            </h3>
            <span className="text-sm text-indigo-500 font-bold cursor-pointer">Ver Tudo</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                  <th className="py-2 font-medium">Aplicação</th>
                  <th className="py-2 font-medium">Plataforma</th>
                  <th className="py-2 font-medium">Rate (ROAS)</th>
                  <th className="py-2 font-medium text-right">Custo</th>
                </tr>
              </thead>
              <tbody>
                {allCampaignsData.map((campaign, i) => (
                  <tr 
                    key={i} 
                    onClick={() => handleCampaignClick(campaign.name)}
                    className={`border-b border-gray-50 last:border-0 hover:bg-indigo-50 transition-colors cursor-pointer ${
                      selectedCampaign === campaign.name ? 'bg-indigo-50 ring-2 ring-indigo-200' : ''
                    }`}
                  >
                    <td className="py-4">
                       <div className="flex items-center gap-3">
                         <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                           selectedCampaign === campaign.name ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'
                         }`}>
                           {selectedCampaign === campaign.name && (
                             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                             </svg>
                           )}
                         </div>
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${campaign.platform.includes('Meta') ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                            {campaign.platform.includes('Meta') ? 'M' : 'G'}
                         </div>
                         <span className="font-medium text-gray-700">{campaign.name}</span>
                       </div>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{campaign.platform}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-500" style={{ width: `${campaign.rate}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500">{campaign.rate}%</span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium text-gray-600">{campaign.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
