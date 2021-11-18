export default function Modal({ children, title, close }) {
  return (
    <div className='bg-gray-700 bg-opacity-50 absolute inset-0 flex justify-center items-center'>
      <div className='bg-white max-w-lg border rounded-lg p-8'>
        <div className='mt-2 mb-4 '>
          <div className='flex justify-between'>
            <div>
              {title && (
                <h1 className='font-medium text-2xl'>{title}</h1>
              )}
            </div>
            <div
              onClick={close}
              className='font-bold hover:text-pink-400'
            >
              X
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

// sits on top of the content
// it can opened and closed
// background gets blurs or hidden or dimmed

//  <div className='fixed p-8 top-8 md:top-16 md:mx-32 bg-white border rounded top inset-0 z-50'>
// {children}
// </div>

{
  /* <div className='bg-red-500 bg-opacity-50 absolute-inset-0 flex justify-center items-center'> */
}

// onClick={close}
//                 className='font-bold hover:text-pink-400'
