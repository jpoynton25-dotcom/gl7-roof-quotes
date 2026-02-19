import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Eastleach',
  slug: 'eastleach-roof-repairs',
  postcode: 'GL7 3',
  titleTag: 'Roof Repairs in Eastleach (GL7)',
  metaDesc: 'Roof repair request service for Eastleach homeowners, GL7. We connect you with a suitable local roofing professional — no shared leads, no obligation, fast response.',
  ogDesc: 'Submit a roof repair request in Eastleach, GL7. Matched with a local roofing professional. No shared leads, no obligation.',
  searchTerms: [
    'Roof repairs in Eastleach GL7',
    'Local roofer Eastleach',
    'Emergency roof repair Eastleach',
    'Stone roof repair Eastleach Cotswolds'
  ],
  h1: 'Roof Repairs in Eastleach (GL7)',
  urgencyText: 'Roof problem in Eastleach? Submit your request and be matched with a suitable local roofing professional covering the GL7 Cotswold villages — no obligation, details never shared publicly.',

  intro: `
    <p>Eastleach is actually two ancient parishes — Eastleach Martin and Eastleach Turville — joined by a medieval clapper bridge across the River Leach. Together they form one of the most remote and unspoiled settlements in the GL7 area. The village is almost entirely composed of traditional Cotswold stone buildings: farmhouses with steeply pitched stone slate roofs, ancient barns in various states of conversion, and small stone cottages that have been occupied for centuries. In a setting this historic, roofing is never straightforward.</p>
    <p>Homeowners in Eastleach face a particular challenge: the village's remoteness means that many roofing contractors are reluctant to travel out for smaller jobs. This can leave residents in a difficult position when a chimney flashing begins to fail, a stone slate slips, or a valley starts to leak. The older the property, the more likely it is that specialist knowledge of traditional materials and heritage-sensitive techniques is required — and this needs to be matched with a willingness to work in a rural GL7 location.</p>
    <p>GL7 Roof Quotes exists to bridge exactly this gap. We are a local request platform — not a contractor — and we connect Eastleach homeowners with roofing professionals who specifically cover the GL7 rural village area. Submitting a request takes a few minutes and puts you in contact with someone who will actually come to Eastleach.</p>
  `,

  commonIssues: [
    { issue: 'Stone slate repairs', detail: 'Eastleach\'s oldest properties may still have original Cotswold stone slate roofs — beautiful but heavy and requiring specialist repair when individual slates fail.' },
    { issue: 'Chimney stack deterioration', detail: 'Remote stone farmhouses often have chimney stacks that have not been professionally inspected for years, with failed flaunching and eroded mortar joints.' },
    { issue: 'Valley and hip water ingress', detail: 'Lead valleys and hips on the complex roof profiles of converted agricultural buildings in Eastleach fail as the metal fatigues.' },
    { issue: 'Verge and ridge mortar failure', detail: 'Exposed Cotswold ridges facing prevailing westerly winds lose mortar bedding and allow ridge tiles to lift and become a safety hazard.' },
    { issue: 'Barn conversion roof issues', detail: 'Agricultural buildings converted to residential use often have flat or semi-flat roof sections and parapet gutters that require specialist ongoing maintenance.' },
    { issue: 'Moss and vegetation on roofs', detail: 'Shaded north-facing roof slopes in Eastleach accumulate significant moss growth that lifts tiles and retains moisture against the tile surface.' },
  ],

  localContext: `
    <p>Eastleach's exceptional historic character means that many properties — both the churches themselves and a significant number of the oldest cottages and farmhouses — are listed buildings. Repair and maintenance work on listed structures must be undertaken with conservation-appropriate materials and techniques. This means lime mortar rather than cement for pointing, matching slate or stone for tile replacement, and traditional lead work for flashings and valleys. Not every roofer is equipped or willing to undertake this type of work, which is why matching Eastleach requests with appropriately experienced professionals matters.</p>
    <p>The village's position in the Leach valley also creates particular moisture conditions. The river valley generates persistent mist during damp months, and the surrounding meadows and water features mean that atmospheric moisture levels are consistently higher than on surrounding upland areas. Roof structures without adequate ventilation are particularly vulnerable to moisture build-up, and the dense stone walls of older properties retain and transmit moisture in ways that can make diagnosing the true source of damp challenging. A professional assessment from someone familiar with Cotswold stone construction is often essential.</p>
    <p>Access to Eastleach is along narrow country lanes, and scaffold access to some properties can be logistically demanding. Providing details about access in your request helps us match you with a professional who has experience with rural working conditions and who has appropriate equipment for tight access situations.</p>
  `,

  midContent: `
    <p>Requesting roofing assistance in Eastleach through GL7 Roof Quotes is designed to be simple for homeowners in remote locations. You describe the issue, include your postcode, add a contact number or email address, and optionally upload a photograph taken safely from ground level. The form can be completed on a mobile phone, which is helpful when you have just noticed a problem and want to log it straight away.</p>
    <p>We review the details and connect your request with a roofing professional who specifically covers rural GL7 villages including Eastleach. They will reach out to you directly — there is no call centre, no chatbot, and no automated follow-up sequence. A professional who covers this area will contact you to discuss the issue and agree on a time for an inspection visit.</p>
    <p>We understand that in a village as remote as Eastleach, getting a reliable professional to attend is often the hardest part of any maintenance process. Our GL7 focus means we only work with professionals who are actively willing to cover the full GL7 village cluster, including the more rural locations like Eastleach, Southrop and Coln St Aldwyns.</p>
  `,

  closingContent: `
    <p>For Eastleach homeowners, GL7 Roof Quotes provides a practical first step when facing a roofing problem. Instead of searching through online directories populated with companies that may not cover your area, submitting a request through our platform ensures that the professional who contacts you is already within the GL7 working area and familiar with the demands of rural Cotswold properties.</p>
    <p>There is no cost to submit a request, and there is no obligation to proceed after an inspection or quotation. Your details are never posted publicly or shared with multiple contractors. This is a one-to-one matching process, designed for homeowners who want a straightforward, respectful way to access professional roofing help.</p>
    <p>Eastleach sits close to Southrop, Hatherop and Coln St Aldwyns within the GL7 village cluster. All of these communities are covered by our platform, and each can be treated as a separate request if you have roofing needs across multiple locations.</p>
  `,

  nearby: [
    { name: 'Southrop', slug: 'southrop-roof-repairs' },
    { name: 'Coln St Aldwyns', slug: 'coln-st-aldwyns-roof-repairs' },
    { name: 'Hatherop', slug: 'hatherop-roof-repairs' },
  ],
};

export default function EastleachRoofRepairs() {
  return <VillagePage data={data} />;
}
