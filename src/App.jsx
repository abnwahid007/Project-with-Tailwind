
function App() {

  return (
    <>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Demo Website</title>
        <script src="https://unpkg.com/feather-icons"></script>
      </head>
      <body>

        {/*Navbar*/}
        <nav class="bg-blue-950">
          <div class="flex items-center justify-between mx-auto required w-[1080px]">

            <a href="/" class="cursor-pointer">
              <img src="/Image/logo.png" alt="" 
              width="125px"
              height="20px
              my-[-10px]"/>
            </a>

            <ul class="flex space-x-4">
              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Payment</a>
                <div class="absolute bottom-3 w-full h-1 bg-blue-200 hidden group-hover:block transition-all duration-200" ></div>
              </li>

              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Banking</a>
                <div class="absolute bottom-3 w-full h-1 bg-blue-200 hidden group-hover:block transition-all duration-200" ></div>
              </li>

              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Corporate-Card</a>
                
              </li>
              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Payroll</a>
                
              </li>
              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Resources</a>
                <div class="absolute bottom-3 w-full h-1 bg-blue-200 hidden group-hover:block transition-all duration-200" ></div>
              </li>
              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Support</a>
                <div class="absolute bottom-3 w-full h-1 bg-blue-200 hidden group-hover:block transition-all duration-200" ></div>
              </li>
              <li class="text-white font-mullish py-7 hover:text-blue-300 cursor-pointer
              transition-all duration-200 relative group">
                <a href="#">Pricing</a>
                <div class="absolute bottom-3 w-full h-1 bg-blue-200 hidden group-hover:block transition-all duration-200" ></div>
              </li>
            </ul>

            <div class="flex space-x-3.5">
              <img class="h-5 w-8 mt-3.5" src="/Image/Flag_of_Bangladesh.svg.png" alt="" 
              width="28px" 
              height="20px"/>
              <button class="py-3 px-5 font-sans text-white border-amber-100 border 
              rounded-sm text-sm font-bold cursor-pointer">Log in</button>
              <button class="py-3 px-5 font-sans text-blue-600 border 
              rounded-sm text-sm font-bold bg-white cursor-pointer
              transition-all duration-200 hover:text-blue-950">Sign up</button>
            </div>
          </div>
        </nav>

        {/*Hero section*/}
        <section class="relative bg-blue-950 ">
          {/*left right block*/}
          <div class="w-10/12 max-w-[800px] flex flex-row justify-between items-center mx-auto ">
            {/*Left part*/}
            <div class="space-y-5">
              <h1 class="font-sans font-bold text-[30px] leading-[1.2] text-white">Power your finance, 
                grow your bussiness
              </h1>
              <div class="w-6 h-1 bg-green-300 "></div>
              <p class="font-serif text-white text-[14px] opacity-70 leading-6">
                Take control of your financial journey with smart tools and insights.
                Build a stronger, faster, and more scalable business future.
              </p>
              <button class="bg-blue-700
                            text-white
                              rounded-md
                              font-sans
                              hover:bg-blue-400
                              transition all 200
                              text-sm
                              py-[9px]
                              px-[7px]
                              cursor-pointer"
              >Sign up now</button>
            </div>
            {/*Right part*/}
            <img src="/Image/hero.png" alt="" class="max-w-[450px] h-[450px] w-full"/>
          </div>

          {/*Shape part*/} 
          <div class="absolute right-0 left-0 w-full "> 
            <img src="Image/corner_shape.PNG" alt="" 
            class="w-full h-[100px]"/>
          </div>
        </section>

        {/*Payment getway*/}
        <section class="relative mt-[150px]">
          <img src="/Image/dot_1.png" alt="" loading="lazy"
          width="150"
          height="107" 
          class="absolute -top-[3rem] right-[1rem] opacity-5"/>
          
          <img src="/Image/dot_2.png" alt="" loading="lazy"
          width="200"
          height="170"
          class="absolute -top-[8rem] left-[6rem] opacity-15"/>

          <div class="relative w-11/12 max-w-[800px] mx-auto pt-4 ">
            {/*heading*/}
            <h2 class="font-sans text-2xl leading-1.2 font-bold text-center -mt-16 mb-4">
              Accept payment with any online method
            </h2>
            <div class="w-6 h-1 bg-green-300 mx-auto mb-12"></div>

            {/*content-box*/}
            <div class="border p-2 border-blue-400/20 shadow-md rounded-md">
              <div class="w-full min-h-[400px] bg-white  relative p-8 flex ">
              {/*left-section*/}
                <div class="flex flex-col justify-between w-full">
                  <h3 class="font-sans text-2xl leading-10 font-bold max-w-[400px] mb-7">
                    Supercharge your business with the all powerfull 
                    <span class="text-blue-500 cursor-pointer"> Payment Gateway</span>
                  </h3>
                  <ul class="space-y-2 mb-7">
                    <li class="flex items-center space-x-2">
                      <i data-feather="check" class="bg-green-300"></i>
                      <span>100+ Payment Method</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <i data-feather="check" class="bg-green-300"></i>
                      <span>Industry Leading Success Rate</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <i data-feather="check" class="bg-green-300"></i>
                      <span>Superior Checkout Experience</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <i data-feather="check" class="bg-green-300"></i>
                      <span>Easy Integrate</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <i data-feather="check" class="bg-green-300"></i>
                      <span>Instant Settlements From Day !</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <i data-feather="check" class="bg-green-300"></i>
                      <span>In-depth reporting and Insight</span>
                    </li>
                  </ul>
                  <div class="flex flex-row items-center space-x-4">
                    <button class="bg-blue-700
                              text-white
                                rounded-md
                                font-sans
                                hover:bg-blue-400
                                transition all 200
                                text-sm
                                py-[9px]
                                px-[7px]
                                cursor-pointer">
                      Sign up now
                    </button>
                    <div class="flex cursor-pointer items-center group">
                      <a href="#"
                      class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                      <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                    </div>
                  </div>
                </div>
              <img src="/Image/Payment.png" alt="" class="max-w-150 h-[350px] absolute right-5 bottom-10" />
            </div>

            {/*Boxes*/}
            <div class="w-full grid grid-cols-3 gap-4 mt-[25px]">
              {/*Box - 1*/}
              <div class="w-full min-h-[15rem] cursor-pointer relative">
                <img src="/Image/links-icon.png" alt="" 
                class="to-blue-400 absolute right-1.5 top-1.5 w-12 h-12 rounded-full z-[9] transition-all
                duration-200"/>
                {/*Box - 1 shape*/}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11
                    v 126
                    a 6 6 0 0 1 -6 6
                    h -337.32501220703125
                    a 6 6 0 0 1 -6 -6
                    z"
                    fill="#fff"
                  ></path>
                </svg>
                {/*Box - 1 content*/}
                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 class="font-sans font-bold text-blue-800 leading-[1.2] text-[1.175rem]">Payment Links</h3>
                    <p class="font-sans text-gray-700 mt-6">They can be sent via email, SMS, or social media for
                       quick, secure transactions.Businesses use them to accept one-time.</p>
                  </div>
                  <div class="flex cursor-pointer items-center group">
                    <a href="#"
                    class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                    <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                  </div>
                </div>
              </div>

              {/*Box - 2*/}
              <div class="w-full min-h-[15rem] cursor-pointer relative">
                <img src="/Image/payment-pages.png" alt="" 
                class="to-blue-400 absolute right-1.5 top-1.5 w-12 h-12 rounded-full z-[9] transition-all
                duration-200"/>
                {/*Box - 2 shape*/}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11
                    v 126
                    a 6 6 0 0 1 -6 6
                    h -337.32501220703125
                    a 6 6 0 0 1 -6 -6
                    z"
                    fill="#fff"
                  ></path>
                </svg>
                {/*Box - 2 content*/}
                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 class="font-sans font-bold text-blue-800 leading-[1.2] text-[1.175rem]">Payment Pages</h3>
                    <p class="font-sans text-gray-700 mt-6">Customizable web pages where customers can complete a payment — no coding needed.
                      Ideal for selling products, services, or collecting donations.
                    </p>
                  </div>
                  <div class="flex cursor-pointer items-center group">
                    <a href="#"
                    class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                    <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                  </div>
                </div>
              </div>

              {/*Box - 3*/}
              <div class="w-full min-h-[15rem] cursor-pointer relative">
                <img src="/Image/information.jpg" alt="" 
                class="to-blue-400 absolute right-1.5 top-1.5 w-12 h-12 rounded-full z-[9] transition-all
                duration-200"/>
                {/*Box - 3 shape*/}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11
                    v 126
                    a 6 6 0 0 1 -6 6
                    h -337.32501220703125
                    a 6 6 0 0 1 -6 -6
                    z"
                    fill="#fff"
                  ></path>
                </svg>
                {/*Box - 3 content*/}
                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 class="font-sans font-bold text-blue-800 leading-[1.2] text-[1.175rem]">Payment Buttons</h3>
                    <p class="font-sans text-gray-700 mt-6">Automate splitting or routing of incoming payments between multiple accounts.
                      Useful for marketplaces, vendors, or partner commissions.
                    </p>
                  </div>
                  <div class="flex cursor-pointer items-center group">
                    <a href="#"
                    class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                    <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                  </div>
                </div>
              </div>

              {/*Box - 4*/}
              <div class="w-full min-h-[15rem] cursor-pointer relative">
                <img src="/Image/subscribe.png" alt="" 
                class="to-blue-400 absolute right-1.5 top-1.5 w-12 h-12 rounded-full z-[9] transition-all
                duration-200"/>
                {/*Box - 4 shape*/}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11
                    v 126
                    a 6 6 0 0 1 -6 6
                    h -337.32501220703125
                    a 6 6 0 0 1 -6 -6
                    z"
                    fill="#fff"
                  ></path>
                </svg>
                {/*Box - 4 content*/}
                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 class="font-sans font-bold text-blue-800 leading-[1.2] text-[1.175rem]">Subscriptions</h3>
                    <p class="font-sans text-gray-700 mt-6">Automated system for collecting payments via virtual accounts or UPI IDs.
                      Each customer or invoice gets a unique identifier for easy reconciliation.
                    </p>
                  </div>
                  <div class="flex cursor-pointer items-center group">
                    <a href="#"
                    class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                    <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                  </div>
                </div>
              </div>

              {/*Box - 5*/}
              <div class="w-full min-h-[15rem] cursor-pointer relative">
                <img src="/Image/route.jpg" alt="" 
                class="to-blue-400 absolute right-1.5 top-1.5 w-12 h-12 rounded-full z-[9] transition-all
                duration-200"/>
                {/*Box - 5 shape*/}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11
                    v 126
                    a 6 6 0 0 1 -6 6
                    h -337.32501220703125
                    a 6 6 0 0 1 -6 -6
                    z"
                    fill="#fff"
                  ></path>
                </svg>
                {/*Box - 5 content*/}
                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 class="font-sans font-bold text-blue-800 leading-[1.2] text-[1.175rem]">Route</h3>
                    <p class="font-sans text-gray-700 mt-6">Enable automatic recurring billing for products or services.
                      Customers are charged periodically (daily, monthly, yearly, etc.).
                    </p>
                  </div>
                  <div class="flex cursor-pointer items-center group">
                    <a href="#"
                    class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                    <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                  </div>
                </div>
              </div>

              {/*Box - 6*/}
              <div class="w-full min-h-[15rem] cursor-pointer relative">
                <img src="/Image/smart.png" alt="" 
                class="to-blue-400 absolute right-1.5 top-1.5 w-12 h-12 rounded-full z-[9] transition-all
                duration-200"/>
                {/*Box - 6 shape*/}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11
                    v 126
                    a 6 6 0 0 1 -6 6
                    h -337.32501220703125
                    a 6 6 0 0 1 -6 -6
                    z"
                    fill="#fff"
                  ></path>
                </svg>
                {/*Box - 6 content*/}
                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 class="font-sans font-bold text-blue-800 leading-[1.2] text-[1.175rem]">Smart Collect</h3>
                    <p class="font-sans text-gray-700 mt-6">Simple, embeddable buttons that trigger a checkout when clicked.
                      Perfect for websites, blogs, or emails to accept quick payments.
                    </p>
                  </div>
                  <div class="flex cursor-pointer items-center group">
                    <a href="#"
                    class="text-blue-500 font-bold group-hover:text-gray-950 transition-all duration-200">Know more</a>
                    <i class="text-blue-500 group-hover:text-gray-950 transition-all duration-200" ></i>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>
        </section>

        {/*Feature-section*/}
        <section 
        class="bg-[url(./Image/Bg.PNG)] bg-no-repeat bg-cover bg mt-[100px]">
          <div 
          class="w-[70%] max-w-[800px] relative mx-auto top-30">
            {/*heading*/}
            <h2 class="font-sans text-2xl leading-1.2  text-center -mt-16 mb-4 text-white">
              Explore Our Bussiness Banking
            </h2>
            <div class="w-6 h-1 bg-green-300 mx-auto mb-12"></div>

            {/*main section box*/}
            <div class="w-full min-h-[440px] flex flex-col relative">
              <img  src="/Image/thunder.png" alt="" 
              loading="lazy"
              class="absolute -top-[100px] left-[10px] h-[250px] w-[220px] opacity-20"
              />
              <img src="/Image/thunder.png" alt="" 
              loading="lazy"
              class="absolute -top-[140px] right-[140px] h-[250px] w-[220px] opacity-20"
              />

              {/*content box*/}
              <div>
                {/*left part*/} 
                <div>
                  <h3>Manage your companies finance
                    <img src="/Image/logo.png" alt="" />
                    <span>Bussiness banking</span>
                  </h3>
                  <ul>
                    <li>
                      <i></i>
                      <span>Open a fully digital current account</span>
                    </li>
                    <li>
                      <i></i>
                      <span></span>
                    </li>
                    <li>
                      <i></i>
                      <span></span>
                    </li>
                    <li>
                      <i></i>
                      <span></span>
                    </li>
                  </ul>
                  <div>
                    <button>
                      sign up
                    </button>
                    <div>
                      <a href="">know more</a>
                      <i></i>
                    </div>
                  </div>
                </div>
                {/*background image*/}
                <img src="/Image/Enterprise.png" alt="" 
                 class="h-[20px] w-[20px]"/>
              </div>
            </div>
          </div>
        </section>

        <script>
          feather.replace()
        </script>
      </body>
      </html>
    </>
  )
}

export default App
