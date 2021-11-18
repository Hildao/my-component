import { useState, useEffect } from 'react';
import Modal from '@/ui/modal';
import TextField from '@/ui/text-field';
import CheckBox from '@/ui/check-box';
import Radio from '@/ui/radio';
import Button from '@/ui/button';

// build a modal component - WIP
// build a checkbox component - WIP
// build a radio component - WIP
// build a text field component - WIP
// when you click on a label, it should put the focus on the related field - (Start here and
// refer to https://www.youtube.com/watch?v=kuzhS_Aepdc to set focus

// know how to
// - use local storage
// - client side and server side cookies - See it in my nextjs app client-an-server-side-cookie
// - learn accessibility (aria)

// Know what is a JWT and being able to explain it - (JWT is Json web token)

const defaultValues = [
  {
    name: '',
    rememberMe: false,
    radio: false,
  },
];

export default function Homepage() {
  const [values, setValues] = useState(defaultValues);
  const [open, setOpen] = useState(false);

  const { name, rememberMe, radio } = values;

  //Only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setValues(JSON.parse(localStorage.getItem('userData')));
    }
  }, []);

  // run every time values that is our state changes.
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(values));
  }, [values]);

  return (
    <div className='container mx-auto py-10 px-10'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deleniti obcaecati asperiores eligendi! Eveniet cumque
        officiis, inventore, dolores ex aut ipsam at illum eligendi
        minima eaque officia nam perferendis tenetur molestiae.
      </p>
      <div className='px-96'>
        <Button block className='mt-4' onClick={() => setOpen(true)}>
          Sign up
        </Button>
      </div>
      <p className='mt-4'>
        Qui animi molestiae minima ea illum, at sed sapiente iste
        laborum cumque ipsam voluptatem! Vel aliquid ullam, minus
        animi exercitationem sint, magni praesentium neque possimus a,
        nobis inventore laborum? Excepturi!
      </p>
      <p className='mt-4'>
        Ex rem molestias eius nostrum quasi! Voluptatibus non,
        inventore soluta voluptas nobis sapiente, hic ex aliquid,
        minima itaque totam? Libero reiciendis eius omnis natus, porro
        soluta quas laudantium accusamus quidem.
      </p>
      <p className='mt-4'>
        Tenetur provident fuga odio adipisci impedit nam nostrum quo
        necessitatibus. Consequatur sit, consequuntur beatae
        doloremque, odit quae optio quas, temporibus laudantium
        facilis eius dolore fugit ipsum similique aliquam unde
        blanditiis?
      </p>
      <p className='mt-4'>
        Hic fugiat modi illum minima consectetur ullam voluptate
        asperiores libero inventore sed, amet enim, fuga blanditiis
        laboriosam quod quo? Necessitatibus omnis quae, numquam saepe
        culpa dolore sapiente assumenda impedit ratione.
      </p>
      <p className='mt-4'>
        Ut illo et dolorem perspiciatis qui eius ex. Obcaecati velit
        corporis delectus sed reprehenderit soluta cumque sint nam,
        exercitationem alias nisi quae molestias eius tempore maxime
        voluptas debitis autem quaerat!
      </p>
      <p className='mt-4'>
        Commodi voluptatum itaque amet, pariatur vel, quaerat
        blanditiis magni harum dolorem sunt eligendi quos repellat
        corrupti. Debitis eaque modi accusantium culpa assumenda illo
        architecto nesciunt, iure, voluptate maxime alias! Molestias.
      </p>
      <p className='mt-4'>
        Eius nisi modi ea unde autem quod, earum nostrum molestias
        dolore aperiam fugit, neque nulla libero commodi esse
        distinctio consectetur officia voluptatum atque voluptate
        beatae eveniet possimus et. Molestias, ullam.
      </p>
      <p className='mt-4'>
        Ipsam cupiditate amet officia eligendi, inventore animi
        doloribus tempora. Ut aspernatur, non eligendi ratione quasi
        placeat optio commodi inventore esse adipisci repellendus
        illum facere tempore necessitatibus, error sunt modi enim.
      </p>
      <p className='mt-4'>
        Maiores quidem, atque impedit accusamus delectus dolorum
        excepturi repudiandae odio mollitia officiis nihil eaque velit
        nesciunt, consequatur quod totam molestias vel explicabo
        eveniet aperiam, quaerat reiciendis accusantium esse.
        Reprehenderit, harum.
      </p>
      {open && (
        <Modal close={() => setOpen(false)} title='Sign up.'>
          <TextField
            label='Your name'
            placeholder='Give your name'
            value={name}
            onChange={(name) =>
              setValues((prev) => ({ ...prev, name }))
            }
          />
          <p className='font-bold m-2'>Gender</p>
          <div className='flex justify-center space-x-2'>
            <Radio
              label='Male'
              checked={radio === 'male'}
              value='male'
              onChange={(radio) =>
                setValues((prev) => ({ ...prev, radio }))
              }
            />
            <Radio
              label='Female'
              checked={radio === 'female'}
              value='female'
              onChange={(radio) =>
                setValues((prev) => ({ ...prev, radio }))
              }
            />
            <Radio
              label='Other'
              checked={radio === 'other'}
              value='other'
              onChange={(radio) =>
                setValues((prev) => ({ ...prev, radio }))
              }
            />
          </div>
          <CheckBox
            label='Remember me'
            checked={rememberMe}
            onChange={(rememberMe) =>
              setValues((prev) => ({ ...prev, rememberMe }))
            }
          />
          <Button block onClick={() => setOpen(false)}>
            Sign up
          </Button>
        </Modal>
      )}
      ;
    </div>
  );
}

//Homework.
// when you click the button, check to see if the checkbox is checked.
// if it is, write the content name to local storage.

// when people click the checkbox and hit the button, it will write the value of the name field into the local storage.

// pull this code into another vs code file
// create components for the input fields
