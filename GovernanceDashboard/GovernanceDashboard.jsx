import { FormikProvider, useFormik } from 'formik';
import Header from '../../../components/header/Header';
import Loading from '../../../GenericComponents/Loader';
import GenericHeader from '../../../GenericComponents/GenericHeader';
import { t } from 'i18next';
import GenericButtons from '../../../GenericComponents/GenericButton/GenericButtons';
import CommonFooter from '../../../components/footers/CommonFooter';
import { useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import GenericFormCard from '../../../GenericComponents/GenericFormCard.component';
import {
  BUDGET_OVERVIEW_DATA,
  COMPLETION_TREND_DATA,
  DISTRICT_PERFORMANCE_DATA,
  GOVERNANCE_FILTER_FORM,
  GOVERNANCE_KPI_CARDS,
  GOVERNANCE_TABS
} from './GovernanceDashboard.const';
import './GovernanceDashboard.css';
import BudgetOverviewChart from './components/BudgetOverviewChart';
import DistrictPerformanceChart from './components/DistrictPerformanceChart';
import CompletionTrendChart from './components/CompletionTrendChart';

function GovernanceDashboard() {
  const [isLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const formik = useFormik({
    initialValues: {
      governance: {
        financialYear: '2026-27',
        secretary: 'Secretary'
      }
    }
  });

  const { values } = formik;

  const kpiData = useMemo(
    () => ({
      totalDprs: 623,
      completedProjects: 189,
      stalledProjects: 35,
      budgetUtilisation: 56,
      avgCompletionDays: 42,
      pendingDisbursal: '5,610'
    }),
    []
  );

  return (
    <div className='gov-dashboard-shell'>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FormikProvider value={formik}>
            <div className='common-screen-x-space font-inter'>
              <GenericHeader head={t('GOVERNANCE_DASHBOARD', 'Governance Dashboard')} title={t('HOME', 'Home')} subTitle={t('GOVERNANCE_DASHBOARD', 'Governance Dashboard')} showBreadCrumb={true} />

              <Card className='card_border mb-3'>
                <Card.Body>
                  <div className='row align-items-center'>
                    {GOVERNANCE_FILTER_FORM?.map((val, index) => (
                      <div key={index} className='col-md-4'>
                        <GenericFormCard {...val} />
                      </div>
                    ))}
                    <div className='col-md-auto d-flex align-items-center'>
                      <GenericButtons text={t('APPLY_FILTER', 'Apply Filter')} variant='primary' handleClick={() => {}} className='search-tracker-btn' />
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <div className='gov-top-row'>
                <div className='gov-pill'>FY&nbsp;&nbsp;{values?.governance?.financialYear}</div>
                <div className='gov-pill secretary'>{values?.governance?.secretary}</div>
              </div>

              <div className='gov-tab-wrap'>
                <div className='gov-tabs'>
                  {GOVERNANCE_TABS.map(tab => (
                    <div key={tab} className={`gov-tab ${tab === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                      {tab}
                    </div>
                  ))}
                </div>
              </div>

              <div className='row g-3 mb-3'>
                {GOVERNANCE_KPI_CARDS.map(card => (
                  <div key={card.field} className='col-lg-2 col-md-4'>
                    <Card className='gov-kpi-card'>
                      <p className='gov-kpi-title'>{card.title}</p>
                      <p className={`gov-kpi-value ${card.field === 'pendingDisbursal' ? 'small' : ''}`}>
                        {card.prefix || ''}
                        {kpiData[card.field]}
                        {card.suffix || ''}
                      </p>
                      {card.flag ? <div className={`gov-kpi-flag ${card.flagType}`}>{card.flag}</div> : null}
                    </Card>
                  </div>
                ))}
              </div>

              <div className='row g-3 pb-3'>
                <div className='col-lg-4'>
                  <Card className='gov-chart-card'>
                    <p className='gov-chart-title'>Budget Overview</p>
                    <p className='gov-chart-subtitle'>Sanctioned vs Utilised · FY 2026-27</p>
                    <div className='gov-chart-body'>
                      <BudgetOverviewChart {...BUDGET_OVERVIEW_DATA} />
                    </div>
                  </Card>
                </div>
                <div className='col-lg-4'>
                  <Card className='gov-chart-card'>
                    <p className='gov-chart-title'>District Performance</p>
                    <p className='gov-chart-subtitle'>Project completion %</p>
                    <div className='gov-chart-body'>
                      <DistrictPerformanceChart data={DISTRICT_PERFORMANCE_DATA} />
                    </div>
                  </Card>
                </div>
                <div className='col-lg-4'>
                  <Card className='gov-chart-card'>
                    <p className='gov-chart-title'>Completion Trend</p>
                    <p className='gov-chart-subtitle'>Last 12 months · target = 50</p>
                    <div className='gov-chart-body'>
                      <CompletionTrendChart {...COMPLETION_TREND_DATA} />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </FormikProvider>
        </>
      )}
      <CommonFooter />
    </div>
  );
}

export default GovernanceDashboard;
