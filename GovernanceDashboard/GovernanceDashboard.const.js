export const GOVERNANCE_FILTER_FORM = [
  {
    formData: [
      {
        titleCode: 'FINANCIAL_YEAR',
        title: 'FY',
        field: 'governance.financialYear',
        type: 'DROPDOWN',
        class: 'col-sm-6'
      },
      {
        titleCode: 'ROLE_SECRETARY',
        title: 'Secretary',
        field: 'governance.secretary',
        type: 'DROPDOWN',
        class: 'col-sm-6'
      }
    ]
  }
];

export const GOVERNANCE_TABS = ['Overview', 'Drill-Down', 'Bottlenecks', 'Finance', 'Personnel'];

export const GOVERNANCE_KPI_CARDS = [
  { title: 'Total DPRs', field: 'totalDprs', flag: '' },
  { title: 'Completed Projects', field: 'completedProjects', flag: 'Within SLA', flagType: 'good' },
  { title: 'Stalled Projects', field: 'stalledProjects', flag: 'Breached', flagType: 'bad' },
  { title: 'Budget Utilisation', field: 'budgetUtilisation', suffix: '%', flag: 'At Risk', flagType: 'warn' },
  { title: 'Avg Completion Days', field: 'avgCompletionDays', suffix: 'd', flag: 'At Risk', flagType: 'warn' },
  { title: 'Pending Disbursal', field: 'pendingDisbursal', prefix: '₹', suffix: ' Cr', flag: 'At Risk', flagType: 'warn' }
];

export const BUDGET_OVERVIEW_DATA = {
  labels: ['Imphal', 'Churachandpur', 'Thoubal', 'Kakching'],
  sanctioned: [4411, 3669, 2721, 2040],
  utilised: [2483, 2066, 1532, 1149]
};

export const DISTRICT_PERFORMANCE_DATA = [
  ['Imphal East', 78], ['Imphal West', 72], ['Bishnupur', 68], ['Thoubal', 65], ['Kakching', 62],
  ['Churachandpur', 58], ['Chandel', 55], ['Senapati', 52], ['Ukhrul', 50], ['Kangpokpi', 48],
  ['Jiribam', 45], ['Pherzawl', 42], ['Noney', 40], ['Tengnoupal', 38], ['Kamjong', 35], ['Tamenglong', 31]
];

export const COMPLETION_TREND_DATA = {
  labels: ['Apr 25', 'Jun 25', 'Aug 25', 'Oct 25', 'Dec 25', 'Feb 26'],
  series: {
    imphal: [5, 6, 4, 8, 5, 7],
    thoubal: [4, 3, 5, 4, 5, 3],
    churachand: [3, 4, 4, 6, 4, 5],
    ukhrul: [2, 3, 3, 4, 2, 3]
  }
};
