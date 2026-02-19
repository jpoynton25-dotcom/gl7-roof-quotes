import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Kempsford',
  slug: 'kempsford-roof-repairs',
  postcode: 'GL7 4',
  titleTag: 'Roof Repairs in Kempsford (GL7)',
  metaDesc: 'Roof repair requests for Kempsford homeowners in GL7. We match you with a suitable local roofing professional — no shared leads, no obligation, fast local response.',
  ogDesc: 'Kempsford roof repair request platform. Local GL7 roofing professionals matched to your request. No shared leads.',
  searchTerms: [
    'Roof repairs in Kempsford',
    'Emergency roofer Kempsford GL7',
    'Roof leak Kempsford',
    'Flat roof repair Kempsford GL7'
  ],
  h1: 'Roof Repairs & Emergency Roofing in Kempsford (GL7)',
  urgencyText: 'Roof problem in Kempsford? Submit your request and be matched with a suitable local roofer covering the GL7 area — fast, no-obligation, no shared leads.',

  intro: `
    <p>Kempsford is a small rural village sitting between Fairford and Lechlade, tucked close to the Thames and within sight of the RAF Fairford runway to the north. Its position in the flat Cotswold water meadows means properties here are exposed to open skies and the full force of winds tracking across the Vale. Despite its modest size, Kempsford contains a varied mix of property types: old stone farmhouses and cottages clustered around the church, post-war social housing, and a number of more recently constructed homes on the village edges.</p>
    <p>Roofing issues in Kempsford tend to reflect this mix. The older stone properties suffer from the typical problems of historic GL7 buildings — ageing lead flashings, deteriorating ridge mortar, and chimney stacks in need of repointing. Post-war housing often presents problems with flat and shallow-pitch roofs: felt that has hardened and cracked over decades, inadequate falls causing ponding, and box gutter failures that are not always immediately visible from the ground. If you have noticed water ingress in your Kempsford property — whether sudden after a storm or a slow creeping damp — submitting a roof repair request is the right first step.</p>
    <p>GL7 Roof Quotes is not a roofing contractor. We are a local request platform that connects Kempsford homeowners with experienced roofing professionals who are active in the GL7 area. Your request goes to a single suitable professional — not a lead pool or national directory.</p>
  `,

  commonIssues: [
    { issue: 'Wind-damaged ridge tiles', detail: 'Kempsford\'s exposed flat position means ridge and hip tiles are frequently disturbed by high winds, particularly from the south-west.' },
    { issue: 'Flat roof ponding', detail: 'Post-war properties in the village often have flat roofs with inadequate fall, leading to standing water and accelerated felt deterioration.' },
    { issue: 'Chimney repointing', detail: 'Stone cottages near the church have chimney stacks where original lime mortar has eroded, requiring careful specialist repointing.' },
    { issue: 'Flashing failures at wall abutments', detail: 'Lead step flashings where roofs meet walls — common on extended properties — deteriorate and allow water to track down internal walls.' },
    { issue: 'Felt underlay failures', detail: 'Older properties in Kempsford may have original bitumen felt underlays that have degraded, meaning rain can penetrate even without visible tile damage.' },
    { issue: 'Gutter joint failures', detail: 'UPVC guttering in Kempsford suffers from joint movement in temperature extremes, leading to leaks that can cause long-term fascia damage.' },
  ],

  localContext: `
    <p>One of the most specific roofing challenges for Kempsford homeowners is the village's proximity to RAF Fairford. Aircraft movements — particularly during major exercises and the annual air show — generate significant low-frequency vibration that can, over many years, gradually work loose the mortar bedding on ridge tiles and loosen verge mortar at roof edges. This effect is most pronounced on properties within the northern part of the village closest to the airfield perimeter. If you have had persistent ridge tile movement despite previous repointing work, this is worth mentioning when submitting your request.</p>
    <p>Kempsford's position in the Thames flood plain also means that ground conditions around foundations can shift slightly during wet winters, which occasionally manifests as hairline cracking in chimney stacks and parapet walls — both of which are potential routes for water ingress at roof level. The village sees its share of persistent damp autumns, and properties with inadequate roof ventilation can develop condensation-related moisture issues in loft spaces that are sometimes mistaken for active leaks.</p>
    <p>When requesting roof repair assistance in Kempsford, it helps to distinguish between water that appears during or immediately after rainfall (likely an active ingress point such as a broken tile or failed flashing) and moisture that builds up gradually over weeks (more likely to be a condensation or ventilation issue). Both warrant professional assessment, but the approach and urgency may differ.</p>
  `,

  midContent: `
    <p>Submitting a roof repair request for your Kempsford property is simple. You fill in a short form describing the issue — what you have seen or heard, where in the property the problem manifests, when it started — and add your postcode and contact details. If you can upload a photograph taken safely from the ground, this helps considerably in assessing the likely cause and matching you with the right professional.</p>
    <p>We review your request and connect you with a local roofing professional who covers Kempsford and the surrounding GL7 villages. They will reach out directly to discuss the problem and arrange an inspection at a time that works for you. You are under no obligation to proceed after the inspection or following any quotation provided.</p>
    <p>Because Kempsford is a small village, it is worth noting that we specifically prioritise GL7 postcodes in our matching process. Requests from the Kempsford area are treated as local GL7 requests — not as outlying or lower-priority enquiries. Whether you are dealing with an urgent post-storm situation or planning ahead for maintenance work before winter, submitting a request is the most efficient way to get the right professional in contact with you.</p>
  `,

  closingContent: `
    <p>GL7 Roof Quotes is designed specifically for homeowners in villages like Kempsford — places that are sometimes overlooked by larger roofing companies focused on urban areas, but where the roofing challenges are real and the need for a reliable, local professional is just as pressing. By focusing exclusively on the GL7 area, we can connect you with roofers who genuinely know the local property stock and are within a reasonable working distance of Kempsford.</p>
    <p>Your request details are never shared publicly, never sold to national lead networks, and never distributed to multiple contractors simultaneously. One suitable local professional — that is the model. It is less overwhelming for you as a homeowner, and it means the professional who contacts you has a genuine interest in your specific project rather than racing to be the first of five contractors to call.</p>
    <p>Kempsford sits between Lechlade and Fairford, and we cover all of these GL7 communities. If you have neighbouring properties in Fairford or Down Ampney, separate requests can be submitted for each location.</p>
  `,

  nearby: [
    { name: 'Lechlade', slug: 'lechlade-roof-repairs' },
    { name: 'Fairford', slug: 'fairford-roof-repairs' },
    { name: 'Down Ampney', slug: 'down-ampney-roof-repairs' },
  ],
};

export default function KempsfordRoofRepairs() {
  return <VillagePage data={data} />;
}
