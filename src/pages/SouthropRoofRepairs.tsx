import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Southrop',
  slug: 'southrop-roof-repairs',
  postcode: 'GL7 3',
  titleTag: 'Roof Repairs in Southrop (GL7)',
  metaDesc: 'Need a roofer in Southrop, GL7? Submit a roof repair request and be matched with a suitable local roofing professional. No shared leads, no obligation.',
  ogDesc: 'Roof repair requests for Southrop homeowners in GL7. Matched with suitable local professionals. No shared leads.',
  searchTerms: [
    'Roof repairs in Southrop GL7',
    'Local roofer Southrop',
    'Roof leak Southrop Cotswolds',
    'Chimney repair Southrop GL7'
  ],
  h1: 'Roof Repair Requests in Southrop (GL7)',
  urgencyText: 'Roof damage or leak in Southrop? Submit your request and be matched with a suitable local roofing professional covering GL7 villages — no obligation, details never shared publicly.',

  intro: `
    <p>Southrop is a quiet hamlet nestled beside the River Leach in the south of the Cotswolds, sitting within the GL7 postcode area between Lechlade and Fairford. It is one of the smaller communities in the GL7 cluster — a handful of farms, traditional stone cottages, and a few larger period houses arranged loosely around the village green and the ancient Church of St Peter. The character of the village is almost entirely defined by its vernacular Cotswold stone architecture, and this makes roofing in Southrop a task that demands familiarity with traditional materials and techniques.</p>
    <p>Homeowners in Southrop most commonly encounter problems with chimney stacks — many original to the properties and featuring lime mortar joints that have eroded over decades — and with the transition zones between different roof planes where water concentrates. Valley flashings and hip sections are particular areas of vulnerability on the older farmhouses and cottages in the village. Stone properties also retain moisture in their walls more readily than modern buildings, which means that even minor roof defects can result in significant internal damp if not addressed promptly.</p>
    <p>GL7 Roof Quotes is not a roofing contractor. We are a local platform that connects homeowners in Southrop and surrounding GL7 villages with suitable, experienced roofing professionals. Submitting a request is quick, and your details are handled discreetly — never posted publicly or shared with multiple contractors.</p>
  `,

  commonIssues: [
    { issue: 'Lime mortar chimney repointing', detail: 'Southrop\'s stone cottages have original chimney stacks with aged lime mortar joints that allow water to seep into the stack and down chimney breasts.' },
    { issue: 'Stone slate repairs', detail: 'Some of the oldest properties in Southrop retain original or early Cotswold stone slate roofs that require specialist repair when individual slates shift or break.' },
    { issue: 'Valley and hip failures', detail: 'Complex roof profiles on period farmhouses concentrate rainwater at valleys and hips — areas where lead flashing failures cause the most significant water ingress.' },
    { issue: 'Verge mortar erosion', detail: 'Exposed gable end verges lose their mortar bedding over time, particularly on south-west facing elevations where wind-driven rain is most persistent.' },
    { issue: 'Damp caused by roof ventilation issues', detail: 'Older Southrop properties often lack adequate loft ventilation, leading to condensation build-up in roof voids that mimics active water ingress.' },
    { issue: 'Extension flat roof repairs', detail: 'More recently added extensions and outbuildings in the village often have GRP or felt flat roofs that require professional attention as they age.' },
  ],

  localContext: `
    <p>Southrop's setting in the Leach valley gives the village a slightly sheltered quality compared to the more open villages on the plateau above, but this does not eliminate roofing risk — it simply changes the nature of it. The valley position means that persistent low cloud, heavy dew, and prolonged damp autumns are the norm, and these conditions accelerate the deterioration of roof structures that are not well-maintained or adequately ventilated. Stone walls absorb and hold moisture, so any roofing defect that allows water to enter the wall-roof junction can have a disproportionate effect on internal conditions.</p>
    <p>The village's built heritage also means that planning and conservation considerations can be relevant when roof repairs or replacement are being contemplated. While day-to-day repair work — replacing a broken tile, repointing a chimney stack — does not generally require consent, any proposal to change roofing materials or make significant alterations to the appearance of a listed building will require appropriate approvals. A roofing professional familiar with GL7's conservation requirements is important in this context.</p>
    <p>For most Southrop homeowners, the most pressing concern is simply finding a reliable, knowledgeable roofer who will actually turn up and assess the problem professionally. GL7 Roof Quotes provides a structured way to do exactly that — submitting your request takes a few minutes, and we match you with a professional who genuinely covers this part of the GL7 area.</p>
  `,

  midContent: `
    <p>To request roof repair help in Southrop, you complete a short online form describing the problem — where it is, when you first noticed it, and what symptoms you have observed — and provide your postcode and contact information. Including a photograph where safely accessible is helpful but not required. We review the request and match you with a suitable local roofing professional who covers the Southrop and wider GL7 area.</p>
    <p>The professional we connect you with will contact you directly to discuss the issue and arrange an inspection visit. You are not obligated to proceed at any stage. Your details are sent to one professional only — not broadcast to a pool of contractors competing for your business. This keeps the process straightforward and means the professional who reaches out to you is genuinely interested in the work, not simply speed-dialling through a shared lead list.</p>
    <p>Southrop's rural location means that access and parking are worth mentioning in your request — a roofing professional arriving in a large van with a scaffold trailer will appreciate knowing about any access constraints in advance. Including practical details like this in your request helps ensure a smooth and efficient inspection visit.</p>
  `,

  closingContent: `
    <p>GL7 Roof Quotes prioritises the GL7 village cluster, which includes Southrop alongside Eastleach, Hatherop, Coln St Aldwyns and other nearby communities. We specifically avoid routing GL7 village requests to large national contractors or out-of-area companies. The professionals we work with understand Cotswold stone, traditional lime mortar, natural slate and the specific demands of rural GL7 properties.</p>
    <p>There is no fee to submit a request, no obligation to proceed after an inspection, and no sharing of your personal details with third parties. Whether you have an urgent active leak in your Southrop cottage or are planning ahead for chimney maintenance before the next wet season, submitting a structured request is the most practical starting point.</p>
    <p>Southrop sits close to Eastleach, Hatherop and Lechlade — all of which we cover within the same GL7 request network. If you have properties across multiple GL7 villages, each can be submitted as a separate request.</p>
  `,

  nearby: [
    { name: 'Eastleach', slug: 'eastleach-roof-repairs' },
    { name: 'Hatherop', slug: 'hatherop-roof-repairs' },
    { name: 'Lechlade', slug: 'lechlade-roof-repairs' },
  ],
};

export default function SouthropRoofRepairs() {
  return <VillagePage data={data} />;
}
