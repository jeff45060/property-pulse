'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProperty } from '@/utils/requests'
import PropertyHeaderImage from '@/components/PropertyHeaderImage'
import Link from 'next/link'

const PropertyPage = () => {
  const { id } = useParams()

  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return
      try {
        const property = await fetchProperty(id)
        setProperty(property)
      } catch (error) {
        console.error('Error fetching property:', error)
      } finally {
        setLoading(false)
      }
    }

    if (property === null) {
      fetchPropertyData()
    }
  }, [id, property])

  if (!property && !loading) {
    return (
      <h1 className='mt-10 text-2xl font-bold text-center'>
        Property Not Found
      </h1>
    )
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className='container px-6 py-6 m-auto'>
              <Link
                href='/app/properties'
                className='flex items-center text-blue-500 hover:text-blue-600'
              >
                <i className='mr-2 fas fa-arrow-left'></i> Back to Properties
              </Link>
            </div>
          </section>
          <section className='bg-blue-50'>
            <div className='container px-6 py-10 m-auto'>
              <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
                <main>
                  <div className='p-6 text-center bg-white rounded-lg shadow-md md:text-left'>
                    <div className='mb-4 text-gray-500'>Apartment</div>
                    <h1 className='mb-4 text-3xl font-bold'>
                      Boston Commons Retreat
                    </h1>
                    <div className='flex justify-center mb-4 text-gray-500 align-middle md:justify-start'>
                      <i className='mr-2 text-lg text-orange-700 fa-solid fa-location-dot'></i>
                      <p className='text-orange-700'>
                        120 Tremont Street Boston, MA 02111
                      </p>
                    </div>

                    <h3 className='p-2 my-6 text-lg font-bold text-white bg-gray-800'>
                      Rates & Options
                    </h3>
                    <div className='flex flex-col justify-around md:flex-row'>
                      <div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
                        <div className='mr-2 font-bold text-gray-500'>
                          Nightly
                        </div>
                        <div className='text-2xl font-bold'>
                          <i className='text-red-700 fa fa-xmark'></i>
                        </div>
                      </div>
                      <div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
                        <div className='mr-2 font-bold text-gray-500'>
                          Weekly
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          $1,100
                        </div>
                      </div>
                      <div className='flex items-center justify-center pb-4 mb-4 md:pb-0'>
                        <div className='mr-2 font-bold text-gray-500'>
                          Monthly
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          $4,200
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                    <h3 className='mb-6 text-lg font-bold'>
                      Description & Details
                    </h3>
                    <div className='flex justify-center gap-4 mb-4 text-xl text-blue-500 space-x-9'>
                      <p>
                        <i className='fa-solid fa-bed'></i> 3
                        <span className='hidden sm:inline'>Beds</span>
                      </p>
                      <p>
                        <i className='fa-solid fa-bath'></i> 2
                        <span className='hidden sm:inline'>Baths</span>
                      </p>
                      <p>
                        <i className='fa-solid fa-ruler-combined'></i>
                        1,500 <span className='hidden sm:inline'>sqft</span>
                      </p>
                    </div>
                    <p className='mb-4 text-gray-500'>
                      This is a beautiful apartment located near the commons
                    </p>
                    <p className='mb-4 text-gray-500'>
                      We have a beautiful apartment located near the commons. It
                      is a 2 bedroom apartment with a full kitchen and bathroom.
                      It is available for weekly or monthly rentals.
                    </p>
                  </div>

                  <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                    <h3 className='mb-6 text-lg font-bold'>Amenities</h3>

                    <ul className='grid grid-cols-1 list-none md:grid-cols-2 lg:grid-cols-3'>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>{' '}
                        Wifi
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Full kitchen
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Washer & Dryer
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Free Parking
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Hot Tub
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        24/7 Security
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Wheelchair Accessible
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Elevator Access
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Dishwasher
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Gym/Fitness Center
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Air Conditioning
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Balcony/Patio
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Smart TV
                      </li>
                      <li>
                        <i className='mt-3 mr-2 text-green-600 fas fa-check'></i>
                        Coffee Maker
                      </li>
                    </ul>
                  </div>
                  <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                    <div id='map'></div>
                  </div>
                </main>

                {/* <!-- Sidebar --> */}
                <aside className='space-y-4'>
                  <button className='flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600'>
                    <i className='mr-2 fas fa-bookmark'></i> Bookmark Property
                  </button>
                  <button className='flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600'>
                    <i className='mr-2 fas fa-share'></i> Share Property
                  </button>

                  {/* <!-- Contact Form --> */}
                  <div className='p-6 bg-white rounded-lg shadow-md'>
                    <h3 className='mb-6 text-xl font-bold'>
                      Contact Property Manager
                    </h3>
                    <form>
                      <div className='mb-4'>
                        <label
                          className='block mb-2 text-sm font-bold text-gray-700'
                          htmlFor='name'
                        >
                          Name:
                        </label>
                        <input
                          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                          id='name'
                          type='text'
                          placeholder='Enter your name'
                          required
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block mb-2 text-sm font-bold text-gray-700'
                          htmlFor='email'
                        >
                          Email:
                        </label>
                        <input
                          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                          id='email'
                          type='email'
                          placeholder='Enter your email'
                          required
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block mb-2 text-sm font-bold text-gray-700'
                          htmlFor='phone'
                        >
                          Phone:
                        </label>
                        <input
                          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                          id='phone'
                          type='text'
                          placeholder='Enter your phone number'
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block mb-2 text-sm font-bold text-gray-700'
                          htmlFor='message'
                        >
                          Message:
                        </label>
                        <textarea
                          className='w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none h-44 focus:outline-none focus:shadow-outline'
                          id='message'
                          placeholder='Enter your message'
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className='flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline'
                          type='submit'
                        >
                          <i className='mr-2 fas fa-paper-plane'></i> Send
                          Message
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
export default PropertyPage
