import Accordion from "../shared/components/accordion.js"

function AccordianPage() {
  const accordianData =
    [
      {
        id: 1,
        label: 'What is this component called?',
        content: 'This is a reusable Accordion component.'
      },
      {
        id: 2,
        label: 'What do you mean by Accordion component?',
        content: 'It refers to a component having a header or label with a value/content corresponding to it.'
      },
      {
        id: 3,
        label: 'What are the use-cases of this component?',
        content: 'For giving the FAQ in the website, For displaying Quiz Q/A, etc.'
      },
      {
        id: 4,
        label: 'What do you mean by reusable component',
        content: 'It is a type of component which is design in such a configurable form that we can use them with our data wherever needed.'
      },
      {
        id: 5,
        label: 'Why it is recommended to always make a reusable component',
        content: 'This is because these components reduces the devlopment efforts for same components within the website also these component provide consistency throughout the website.'
      },
    ]

  return (
    <div className="w-full">
      <Accordion data={accordianData} />
    </div>
  );
}

export default AccordianPage;
