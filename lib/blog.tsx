import Image from "next/image";

const CDN = "https://theoldfashionedcocktailco.com/wp-content/uploads";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  featureImage?: string;
  body: React.ReactNode;
};

const h2 =
  "mt-12 mb-4 font-display text-[clamp(27px,2.9vw,38px)] font-semibold uppercase tracking-[0.03em] text-gold";
const h3 = "mt-8 mb-3 font-display text-[22px] uppercase tracking-[0.02em] text-cream";
const p = "mb-5 text-[17px] leading-[1.8] text-body";
const ul = "mb-5 list-disc pl-6 space-y-2 text-body";
const cap = "mt-2 text-center text-[13px] italic text-muted";
const link = "text-gold underline hover:text-cream";
const label =
  "mb-3 mt-6 font-display text-[14px] uppercase tracking-[0.03em] text-cream";
const bestFor = "mb-4 text-[15px] italic text-body-dim";

export const POSTS: BlogPost[] = [
  {
    slug: "mezcal-for-cocktail-mixing",
    title: "Mezcal for Cocktail Mixing",
    category: "Old Fashioned Connoisseur Club",
    date: "February 4, 2021",
    author: "Tim Brown",
    excerpt:
      "Welcome back to The Old Fashioned Connoisseur Club. In this blog series we'll be imparting a few tidbits of our hard-earned knowledge, distilled over years of slingin' bottles and mixing up a storm. Previously we've looked deep into whiskey, and this time out we're headin' south of the border to give mezcal a well-deserved mention. Why drink mezcal? Mexican legend…",
    featureImage: `${CDN}/2021/02/mezcal__drink_with_oranges_on_a_beach-900x536.jpg`,
    body: (
      <>
        <h2 className={h2}>Welcome back to The Old Fashioned Connoisseur Club</h2>
        <p className={p}>
          In this blog series we&apos;ll be imparting a few tidbits of our hard-earned knowledge,
          distilled over years of slingin&apos; bottles and mixing up a storm.
        </p>
        <p className={p}>
          Previously we&apos;ve{" "}
          <a href="/blog/choosing-whiskey-for-cocktails" className={link}>
            looked deep into whiskey
          </a>
          , and this time out we&apos;re headin&apos; south of the border to give mezcal a
          well-deserved mention.
        </p>

        <h2 className={h2}>Why drink mezcal?</h2>
        <p className={p}>
          Mexican legend says the first mezcal was created when a lightning bolt struck an agave
          plant. We wouldn&apos;t argue the point. It&apos;s as close as you&apos;ll get to lightning
          in a bottle – a spirit right after our own heart.
        </p>
        <p className={p}>
          Mezcal is a certified classic with a ton of character – we&apos;re talkin&apos; complex
          flavor profiles, artisanal, small-batch production methods, and plenty of smoke! If you
          like to indulge your wild and experimental side, mezcal might just become your new best
          drinking buddy.
        </p>
        <p className={p}>
          Mezcal is made from the heart of the agave plant. There are over 200 different varieties of
          agave, and mezcal can be produced using around 30-40 of them. The process involves heating
          agave in earth-covered ovens with rocks, wood and charcoal, followed by distillation in
          clay pots. But most mezcaleros have their own unique methods, so different mezcals pack a
          whole bunch of unique characteristics.
        </p>
        <p className={p}>
          Want to get your mitts on some? It&apos;s widely available in the US, but a genuine mezcal
          must originate from Mexico. Just like Scotch Whisky must be from Scotland. Mezcal is
          produced in a bunch of different regions, with Oaxaca being the main one.
        </p>

        <h2 className={h2}>How is mezcal different from tequila?</h2>
        <p className={p}>
          We&apos;re willing to bet you&apos;re already acquainted (perhaps too acquainted) with
          mezcal&apos;s more famous compatriot, tequila.
        </p>
        <p className={p}>
          Tequila is actually a type of mezcal, made from a specific variety of blue agave and
          distilled above ground in copper stills. This makes it smoother and less smoky than other
          mezcals, but means the flavor, broadly speaking, isn&apos;t as complex.
        </p>
        <p className={p}>
          Another key difference you might&apos;ve heard is that &apos;real&apos; mezcal should have a
          worm in the bottle, right? Nope. In fact, that&apos;s total baloney.
        </p>
        <p className={p}>
          The &apos;worm&apos; is actually a moth larva, and it was originally added by one mezcal
          brand as a marketing stunt. It&apos;s not a traditional ingredient, and eating it won&apos;t
          make you hallucinate. If anything, it&apos;s just a handy pre-packed party snack…
        </p>

        <h2 className={h2}>Mezcal types</h2>
        <p className={p}>
          Great news for the impatient – the most common type of mezcal, Joven (young), is a clear,
          unaged spirit that&apos;s born ready to drink.
        </p>
        <p className={p}>
          Even the aged types turn around pretty quick. Reposado hangs out in oak for more than two
          months but less than a year, while Anejo sits for between one and three years until
          it&apos;s ready.
        </p>
        <p className={p}>
          But because every mezcal already possesses its own cool characteristics, our attitude is
          &quot;why wait?&quot; Mezcal doesn&apos;t need much oak added to the mix, so get to
          sippin&apos; it clear and let the good times roll.
        </p>

        <h2 className={h2}>How to taste mezcal</h2>
        <p className={p}>
          Mezcal is unusual in that we&apos;d recommend you try it in a cocktail first. The flavor
          doesn&apos;t respond as well to adding water as whiskey, so the proof can take some getting
          used to for first-timers. You might want to test out our cocktail suggestions below to
          develop an idea of whether you and mezcal will get along.
        </p>
        <p className={p}>
          What&apos;s that? You want to dive straight in anyway? Good on ya, champ! In that case, go
          steady. Sip the mezcal slowly – don&apos;t shot it. And approach the tasting as you would
          with a wine.
        </p>
        <p className={p}>
          There are so many complex factors involved with the ingredients and production of mezcal
          that even specific brands might not taste the same from one year to the next. That&apos;s
          all part of the beauty of becoming a mezcal aficionado – live in the moment and savor the
          spirit that&apos;s in your glass right now!
        </p>

        <h2 className={h2}>The Old Fashioned Choice</h2>
        <p className={p}>Here&apos;s our take on the best mezcal cocktails:</p>

        <h3 className={h3}>The Oaxaca Old Fashioned</h3>
        <p className={p}>
          Ya might&apos;ve guessed this would be one of our favorites. To mix yours, follow the steps
          we outlined{" "}
          <a href="/blog/how-to-make-an-old-fashioned-cocktail" className={link}>
            here
          </a>{" "}
          – just substitute bourbon for mezcal. Enjoy!
        </p>
        <p className={label}>Ingredients:</p>
        <ul className={ul}>
          <li>2oz Mezcal</li>
          <li>3 dashes Bittermens Xocolatl Mole bitters</li>
          <li>1 x sugar cube or Simple Syrup</li>
          <li>Traditional orange peel garnish</li>
          <li>1 x maraschino cherry</li>
        </ul>

        <h3 className={h3}>Mezcal Manhattan</h3>
        <p className={p}>
          Another Mexican sun-soaked twist on a classic, a mezcal manhattan gives the liquor plenty
          of room to showcase its individual style without compromising any of its traditional
          appeal. Tipping one offers the sensation of feeling right at home in an unfamiliar city.
        </p>
        <p className={p}>
          Add the ingredients to a shaker with ice and stir, then strain into a cocktail glass (or a
          lowball on the rocks if you prefer). Garnish with orange peel and enjoy!
        </p>
        <p className={label}>Ingredients:</p>
        <ul className={ul}>
          <li>2 oz Mezcal</li>
          <li>1 oz Sweet Vermouth</li>
          <li>3 dashes Angostura Bitters</li>
          <li>Traditional orange peel garnish</li>
        </ul>

        <h3 className={h3}>Mezcal Mary</h3>
        <p className={p}>
          Mezcal Mary is your spicy savior the morning after the night before (or whenever you
          fancy). This alternative take on a classic Bloody Mary really dials up the heat. Smoky
          mezcal notes and bacon garnish offer a savory undertone that perfectly offsets the fruity
          spice of tomato juice and pureed jalapenos. Caliente!
        </p>
        <p className={p}>
          Pour your mezcal and tomato juice into a pitcher and stir. Then add a squeeze of lime and
          enough jalapeno puree to give your cocktail a kick. Serve in a Collins glass rimmed with
          lime, salt and chilli powder, and garnish with a crispy bacon swizzle stick.
        </p>
        <p className={label}>Ingredients:</p>
        <ul className={ul}>
          <li>12oz mezcal</li>
          <li>24oz tomato juice</li>
          <li>6oz fresh lime juice</li>
          <li>1/4 cup jalapeno puree</li>
          <li>Salt</li>
          <li>Chilli powder</li>
          <li>Bacon swizzle stick garnish</li>
        </ul>
      </>
    ),
  },
  {
    slug: "choosing-whiskey-for-cocktails",
    title: "Choosing Whiskey for Cocktails",
    category: "Old Fashioned Tips",
    date: "December 4, 2020",
    author: "Tim Brown",
    excerpt:
      "A brand new blog series where we'll be imparting a few tidbits of our hard-earned knowledge, distilled over years of slingin' bottles and mixing up a storm. Where to start the series? Well, where better to start than whiskey? A spirit that's at the heart of many a classic cocktail, a little extra whiskey know-how will take your cocktails a…",
    featureImage: `${CDN}/2020/12/Range_Of_Whisky_In_A_Bar-900x600.jpg`,
    body: (
      <>
        <p className={p}>
          A brand new blog series where we&apos;ll be imparting a few tidbits of our hard-earned
          knowledge, distilled over years of slingin&apos; bottles and mixing up a storm.
        </p>
        <p className={p}>
          Where to start the series? Well, where better to start than whiskey? A spirit that&apos;s at
          the heart of many a classic cocktail, a little extra whiskey know-how will take your
          cocktails a long way.
        </p>
        <p className={p}>
          When it comes to selecting the best whiskey for making cocktails, there&apos;s a very
          specific set of requirements. We&apos;re looking for liquor that plays well with others
          rather than a standout solo act. But equally, we don&apos;t want a wallflower whiskey. The
          best options still bring something unique to the party. And remember: a cocktail will
          improve cheap hooch, but cheap hooch won&apos;t improve a cocktail. So don&apos;t break the
          bank, but give moonshine a miss.
        </p>
        <p className={p}>
          Today we&apos;re focusing on the three whiskey types that are most commonly found in
          cocktails: bourbon, rye and Irish. Peaty scotch whiskies (Islay malts, we&apos;re
          lookin&apos; at you) have a stronger flavor that often can overpower cocktails. Plus,
          there&apos;s so much variance in scotch that it kinda needs its own separate article.
        </p>
        <p className={p}>So let&apos;s take a closer look at our chosen categories of fire water:</p>

        <h2 className={h2}>Bourbon</h2>
        <p className={p}>
          A US-made worldwide favorite, bourbon is known for being the sweetest member of the whiskey
          fraternity. Famous for its vanilla and toffee notes, bourbon is aged in new charred oak
          containers and distilled from a grain mixture that&apos;s at least 51% corn. Perfect for
          impatient folks, even the best quality bourbon is ready to drink after just a couple of
          years. But don&apos;t mistake that youth and sweetness for naivety – a good bourbon can
          conceal a complex character.
        </p>

        <h2 className={h2}>Rye Whiskey</h2>
        <p className={p}>
          The spicier cousin of bourbon, rye whiskey is distilled from at least 51% (you guessed it)
          rye grain. Rye whiskey is also pretty quick to mature; often ready after a year or two,
          although it can be aged for longer. Before prohibition, rye was all the rage. Ever since,
          it&apos;s kept a low profile – although in recent years we&apos;ve seen something of a rye
          resurgence. It&apos;s a whiskey that should be right at home on the shelf of any old
          fashioned cocktail connoisseur.
        </p>

        <h2 className={h2}>Irish Whiskey</h2>
        <p className={p}>
          A staple of the Emerald Isle, Irish whiskey is one of the oldest distilled drinks in
          Europe. It&apos;s also the quintessential old fashioned cocktail ingredient. Typically
          distilled three times, it often has a smoother finish than scotch whisky. And because the
          distillation process calls for unmalted barley that isn&apos;t dried with peat smoke, its
          flavor is more amenable to cocktail mixing. A dash of Ireland&apos;s finest will liven up
          everything from your cocktail to your coffee.
        </p>

        <div className="relative aspect-[16/9] my-8">
          <Image
            src={`${CDN}/2020/12/Whisky_Cocktail_Made_In_Bar.jpg`}
            alt="Whisky cocktail made in bar"
            fill
            sizes="(max-width: 820px) 100vw, 820px"
            className="object-cover"
          />
        </div>

        <h2 className={h2}>Choosing a whiskey for cocktails</h2>
        <p className={p}>
          Obviously you&apos;ll combine your whiskey base with other ingredients to mix your cocktail
          of choice. But to pick the liquor that suits your personal taste, you&apos;ll need to try it
          straight first.
        </p>

        <h3 className={h3}>How to taste whiskey:</h3>
        <p className={p}>
          Pop a cork and pour a slug of your whiskey into a rocks glass (or a snifter if you prefer,
          Mr Fancypants).
        </p>
        <p className={p}>
          Swish the whiskey around your glass a little. This gives it room to breathe and helps to
          bring out the flavor.
        </p>
        <p className={p}>
          If you&apos;re new to whiskey, you might want to add a drop of water at this point.
          It&apos;ll prevent the alcohol in the spirit from dominating the aroma and masking other
          flavors.
        </p>
        <p className={p}>Now hold your horses for a second.</p>
        <p className={p}>
          Before you take a sip, bring the whiskey to your beezer and sniff. Then take a breath of
          fresh air and repeat. What does it smell like? Oak? Cherry? Vanilla? Apple? Honey? Pay
          special attention to any notes that might complement the ingredients in your favorite
          cocktail – a hint of sweet apricot pairs well with the lemon citrus of a whiskey sour, for
          example.
        </p>
        <p className={p}>
          You&apos;ve earned it – go ahead and dip your bill. Take a sip of your chosen whiskey,
          paying attention to how it feels in your mouth as well as the taste. The finish (feeling)
          also plays into cocktail pairings. A sweet, smooth finish can counterbalance cocktails with
          ingredients that dry the mouth, and vice versa.
        </p>

        <div className="relative aspect-[16/9] my-8">
          <Image
            src={`${CDN}/2020/12/Range_Of_Whisky_In_A_Bar.jpg`}
            alt="Range of whisky"
            fill
            sizes="(max-width: 820px) 100vw, 820px"
            className="object-cover"
          />
        </div>

        <h2 className={h2}>The Old Fashioned choice</h2>
        <p className={p}>Not sure where to start? You can&apos;t go wrong with:</p>

        <h3 className={h3}>Hudson Baby Bourbon Single Barrel</h3>
        <p className={bestFor}>Best for: Old Fashioned</p>
        <p className={p}>
          Our first choice for an Old Fashioned, this classic bourbon is the first legal pot-still
          whiskey to be produced in New York since prohibition. Matured in miniature two gallon
          barrels, its bold character and sweet vanilla notes are perfectly complemented by the
          citrus and smoke of an Old Fashioned.
        </p>

        <h3 className={h3}>Widow Jane Rye Mash</h3>
        <p className={bestFor}>Best for: Manhattan</p>
        <p className={p}>
          Another of Gotham&apos;s finest, this American Oak-aged Rye Mash is a spicy little
          firecracker that adds some city grit to your Manhattan. Caramel and black pepper notes
          blend with the subtle sweetness of vermouth to deliver a refined take on a classic.
        </p>

        <h3 className={h3}>The Legendary Silkie Irish Whiskey</h3>
        <p className={bestFor}>Best for: Irish Mule</p>
        <p className={p}>
          Distilled in our founder&apos;s hometown of Donegal, this rich blended whiskey offers crisp
          green apple flavors and (unusually for Irish Whiskey) a hint of peated malt. Paired with a
          fiery ginger beer and orange garnish, it&apos;s a real Winter warmer. Sláinte!
        </p>

        <p className={p}>
          We really hope you enjoy sampling our recommendations. But there&apos;s one last thing to
          remember: rules are made to be broken. Becoming a whiskey connoisseur is all about learning
          what you like. So use these tips as a starting point and take our advice with a dash of
          whatever you fancy.
        </p>
        <p className={p}>
          Go ahead and make yours a classic! And if you need a hand serving whiskey cocktails at your
          next event,{" "}
          <a href="#" className={link}>
            get in touch
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "how-to-make-clear-ice-the-old-fashioned-way",
    title: "How to Make Clear Ice the Old Fashioned Way",
    category: "Old Fashioned Tips",
    date: "September 10, 2020",
    author: "Tim Brown",
    excerpt:
      "Serving drinks with a measure of style requires a focus on the details. Get the basics right and you may meet expectations. But to be memorable, you need to surpass them. Ask yourself – when was the last time you found yourself jawing to a friend about the new joint in town because \"they just did the basics well…\" Never,…",
    featureImage: `/images/carousel/Cocktails-made-by-Dwayne-from-Old-Fashioned.jpg`,
    body: (
      <>
        <p className={p}>
          Serving drinks with a measure of style requires a focus on the details. Get the basics
          right and you may meet expectations. But to be memorable, you need to surpass them. Ask
          yourself – when was the last time you found yourself jawing to a friend about the new joint
          in town because &quot;they just did the basics well…&quot;
        </p>
        <p className={p}>Never, right?</p>
        <p className={p}>
          Whether you&apos;re hosting an event or running a bar, astonishing your guests with the
          unexpected is what will get you noticed. The unusual twist you put on the garnish, or the
          unconventional glassware (or whatever it might be) gives your guests a reason to talk about
          you to their friends the next day. Or to post a photo of their drink on social media. And
          just like that you&apos;ve got quite the reputation.
        </p>
        <p className={p}>
          In this blog, we&apos;re going to cover one particular technique you can use to get your
          drinks to turn heads – making your own crystal clear ice.
        </p>

        <h2 className={h2}>Ice that&apos;s clearly superior</h2>
        <p className={p}>
          Ice quality really can make or break a drink: as anyone who has been served either a warm
          or watery whiskey and coke will attest.
        </p>
        <p className={p}>
          And while regular, cloudy ice will keep your drink cold, a transparent block just looks
          totally swell as part of your serve.
        </p>
        <p className={p}>
          Making clear ice is duck soup – you won&apos;t need any fancy equipment. We use a process
          called directional freezing, which is a newfangled technique that delivers Old Fashioned
          Quality. All you need for crystalline ice blocks is:
        </p>
        <ul className={ul}>
          <li>1 x small cooler (without a lid)</li>
          <li>1 x serrated knife</li>
          <li>1 x mallet</li>
          <li>1 x chisel</li>
          <li>1 x ice ball mold</li>
          <li>1 x boston shaker tin</li>
          <li>Tap water</li>
        </ul>

        <div className="grid grid-cols-2 gap-5 my-8">
          <div>
            <div className="relative aspect-square">
              <Image
                src={`${CDN}/2020/09/abstract-18722_1280.jpg`}
                alt="Cloudy ice"
                fill
                sizes="(max-width: 820px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            <p className={cap}>Cloudy Ice</p>
          </div>
          <div>
            <div className="relative aspect-square">
              <Image
                src={`/images/blog/Old_Fashioned_Cocktail_Clear_Ice.jpg`}
                alt="Clear ice"
                fill
                sizes="(max-width: 820px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            <p className={cap}>Clear Ice</p>
          </div>
        </div>

        <h2 className={h2}>The directional freezing process</h2>
        <p className={p}>
          When folks freeze water in a tray to make regular ice cubes, the freezing process takes
          place gradually from the edges of the mould to the center. This causes air and impurities to
          become trapped inside, making the blocks look cloudy.
        </p>
        <p className={p}>
          With directional freezing, we make sure our ice forms from the top down. This way, any air
          is concentrated at the bottom of our block. We can cut the cloudy bottom part off, leaving
          us with a crystal-clear slab of ice.
        </p>
        <p className={p}>
          All you need to do is fill your cooler with water and leave it in the freezer for 24 hours.
          Because the top of the cooler is open but the sides are insulated, the water will freeze
          from the top down. After 24 hours, take your ice out of the freezer and remove it from the
          cooler – run the outside of the container under some warm water to loosen it up if needed.
        </p>
        <p className={p}>
          If you&apos;re lucky, the block will only have frozen about two thirds of the way down the
          cooler. This will leave you with some water in the bottom and a block of clear ice. Chip
          away the thin outer layer round the edges, allowing the excess water to drain away, and
          there ya have it!
        </p>
        <p className={p}>
          But if the whole thing has frozen solid, just cut away any cloudy bits at the bottom. Use a
          serrated knife to score the ice before tapping it gently with a chisel and mallet for best
          results.
        </p>

        <h2 className={h2}>Making clear ice balls</h2>
        <p className={p}>
          For a clear sphere, follow the process we&apos;ve outlined – but before you put the cooler
          in the freezer, fill a boston shaker with water and put it inside the cooler. Then fill your
          ice ball mold with water and put it upside down in the boston shaker, so it&apos;s partially
          submerged.
        </p>
        <p className={p}>
          After 24 hours, take it out of the freezer as above. This method will leave you with both a
          single ice ball and a slab for shaping. If you&apos;d prefer to make multiple ice balls,
          dispense with the shaker and add several molds directly to a cooler. Make sure the water
          level in the cooler just about covers the molds.
        </p>

        <h2 className={h2}>Sculpting your ice</h2>
        <p className={p}>
          You might not be carving intricate sculptures on your first attempt, but don&apos;t be
          afraid to experiment with different shapes of ice blocks to compliment your overall cocktail
          serve.
        </p>
        <p className={p}>
          For example, an ice ball works great for an Old Fashioned served in a rocks glass; but a
          rectangular &apos;stick&apos; of ice is the perfect fit for cocktails served in a highball
          glass (such as a gin rickey).
        </p>

        <div className="relative aspect-[16/9] my-8">
          <Image
            src={`/images/blog/Ice-with-Ice-Stick.jpg`}
            alt="Ice with ice stick"
            fill
            sizes="(max-width: 820px) 100vw, 820px"
            className="object-cover"
          />
        </div>

        <p className={p}>
          You can even keep your ice slab intact and chip bits off in front of guests as you prepare
          their drinks. But whatever shape you choose, cut your blocks big! Not only will they look
          better, they&apos;ll dilute your drinks much more slowly.
        </p>
        <p className={p}>
          And that&apos;s it – go ahead and give it a try! Or if you don&apos;t have time to make
          clear ice yourself, we&apos;ll do it for you! We include clear ice with many of our
          signature drinks – check out our{" "}
          <a href="/how-it-works" className={link}>
            packages here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "how-to-make-an-old-fashioned-cocktail",
    title: "How to Make an Old Fashioned Cocktail",
    category: "Old Fashioned Tips",
    date: "July 29, 2020",
    author: "Tim Brown",
    excerpt:
      "The history of old fashioned cocktails goes way back. We're talkin' all the way to the 1800's back. Folks are still quarreling over the exact date to this day – we're not surprised the fellas and gals who made it first were a little fuzzy on the details after. But the fact that they're still as popular as ever shows…",
    featureImage: `/images/carousel/Ingredients-for-cocktails.jpg`,
    body: (
      <>
        <h2 className={h2}>What&apos;s an Old Fashioned?</h2>
        <p className={p}>
          The history of old fashioned cocktails goes way back. We&apos;re talkin&apos; all the way to
          the 1800&apos;s back.
        </p>
        <p className={p}>
          Folks are still quarreling over the exact date to this day – we&apos;re not surprised the
          fellas and gals who made it first were a little fuzzy on the details after. But the fact
          that they&apos;re still as popular as ever shows they were on to something good.
        </p>
        <p className={p}>
          Now let&apos;s be clear. There are old fashioned cocktails and there&apos;s The Old
          Fashioned. An old fashioned cocktail is any mixture of whiskey, sugar and bitters. The Old
          Fashioned is the way we make &apos;em. With an added measure of style. Here&apos;s how:
        </p>

        <h2 className={h2}>The basics</h2>
        <p className={p}>
          A quality classic cocktail should whet the appetite, have a dry yet smooth flavor, and look
          like a million dollars.
        </p>
        <p className={p}>
          Getting the flavor balance right starts with the base – the main liquor you&apos;ll use in
          your cocktail. The Old Fashioned calls for whiskey (generally bourbon or rye), but brandy
          and rum (or even gin if you&apos;re feeling brave) can work too.
        </p>
        <p className={p}>
          The base will make up to three quarters of your drink, so this isn&apos;t the place to cut
          corners. You&apos;ll want to use a high quality whiskey but find the sweet spot between
          quality and cost. You don&apos;t have to break the bank here – in fact, some of the super
          swell whiskeys and bourbons are better left untouched.
        </p>
        <p className={p}>
          Strength-wise, ideally you&apos;re looking for a rye whiskey or bourbon that&apos;s over 45%
          alc/vol. We prefer to use Woodford Reserve, or Woodford Reserve Double Oaked if we&apos;re
          feelin&apos; real fancy!
        </p>

        <h2 className={h2}>Muddle your modifier</h2>
        <p className={p}>
          The modifier is the secondary ingredient in your cocktail. It&apos;ll enhance the flavor of
          your base and smooth it out by sweetening it just a little.
        </p>
        <p className={p}>
          The traditional method is to add a sugar cube directly to your glass and muddle with a few
          drops of aromatic bitters and water. Our Old Fashioned method uses a mixing glass, a rich
          demerara syrup and a blend of Angostura bitters &amp; Orange bitters (equal parts) to add an
          undertone of citrus. Using a syrup instead of sugar gives you more control over the
          sweetness &amp; consistency of your cocktail.
        </p>

        <h2 className={h2}>Stay cool</h2>
        <p className={p}>
          So you&apos;ve got your base and modifier together in your mixing glass. Now add some large
          cubes and start stirring. The bigger the ice cubes, the slower they will melt and the longer
          you will have to stir, and vice versa. Small cubes melt quickly, making it tricky to control
          the dilution level of your drink.
        </p>
        <p className={p}>
          Stir for about 15-20 seconds or until the outside of your mixing glass begins to frost up –
          the aim here is to get the perfect dilution without over watering the whiskey.
        </p>
        <p className={p}>
          Serve up in a chilled rocks glass over a large cube of clear ice (2&quot;x2&quot;) or ice
          sphere. Same principle applies here, the bigger the ice the slower it melts.
        </p>
        <p className={p}>
          Don&apos;t have any clear ice? You can find out how to make it{" "}
          <a href="/blog/how-to-make-clear-ice-the-old-fashioned-way" className={link}>
            here
          </a>
          .
        </p>

        <div className="relative aspect-[16/9] my-8">
          <Image
            src={`${CDN}/2020/06/Smokey-cocktails-old-fashioned.jpg`}
            alt="Smokey old fashioned cocktail"
            fill
            sizes="(max-width: 820px) 100vw, 820px"
            className="object-cover"
          />
        </div>

        <h2 className={h2}>Care for a smoke?</h2>
        <p className={p}>
          Adding an authentic smoked flavor will take your Old Fashioned from standard to spiffy. Use
          a smoke infuser to fill an empty whiskey bottle (sure you&apos;ll find one somewhere) until
          it&apos;s opaque. Then put the cap on to capture the smoke.
        </p>
        <p className={p}>
          No infuser? No problem. Just burn a small stick of applewood or hickory and place your
          whiskey bottle upside down over the top. Lift the bottle off and cap it whilst still upside
          down to catch the smoke.
        </p>
        <p className={p}>
          Next, pour your cocktail from the mixing jug to the smoke bottle and swirl (don&apos;t
          shake!). After two to three minutes, transfer to a ready and waiting rocks glass and pour
          over your chunky ice.
        </p>

        <h2 className={h2}>Extra appeal</h2>
        <p className={p}>
          To make your Old Fashioned cocktail real easy on the eye, finish off with a garnish.
          Traditionally this calls for a swirl of orange peel and maraschino cherry. Express the peel
          over the drink and rim the outside of the glass before popping it in the drink.
        </p>
        <p className={p}>
          Oh, &apos;an one more thing…be a shame to make it this far and cheap out on the cherries…
        </p>
        <p className={p}>
          Those red cherries belong on a dessert (or in the trash!) – splash out on the Luxardo
          Maraschino cherries to cap your drink off in style.
        </p>

        <p className={label}>Our signature recipe is below:</p>
        <ul className={ul}>
          <li>2oz Woodford Reserve Double Oaked Bourbon</li>
          <li>2 dashes Angostura Bitters, 2 dashes Fee Bros Orange Bitters</li>
          <li>¼oz rich demerara syrup</li>
          <li>Traditional orange peel garnish</li>
          <li>1 x Luxardo maraschino cherry</li>
        </ul>
      </>
    ),
  },
  {
    slug: "how-to-make-your-party-a-classic",
    title: "How to Make Your Party a Classic",
    category: "Old Fashioned Tips",
    date: "June 14, 2020",
    author: "Tim Brown",
    excerpt:
      "Why would you choose to throw a party the old fashioned way? It's a fair question, we guess. But perhaps \"why wouldn't you..?\" would be a better one. The classics become classics for a reason, after all. We believe that a good old fashioned party and a good old fashioned cocktail share the same key elements: a few simple ingredients…",
    featureImage: `/images/blog/Old-school-music-player.jpg`,
    body: (
      <>
        <p className={p}>
          Why would you choose to throw a party the old fashioned way? It&apos;s a fair question, we
          guess. But perhaps &quot;why wouldn&apos;t you..?&quot; would be a better one. The classics
          become classics for a reason, after all.
        </p>
        <p className={p}>
          We believe that a good old fashioned party and a good old fashioned cocktail share the same
          key elements: a few simple ingredients that have stood the test of time, enhanced with a
          personal twist. When put together in the right way, they become so much more than the sum of
          their parts.
        </p>
        <p className={p}>
          So if you&apos;re planning a get-together, resist the temptation to copy the latest
          fancy-pants gimmicks and trends. For a top-notch party your guests will remember, follow our
          tips below and make yours a classic…
        </p>

        <h2 className={h2}>Set your budget</h2>
        <p className={p}>
          First off, decide how much dough you want to pony up. The budget for your party
          shouldn&apos;t affect how much fun your guests have – we&apos;ve thrown some wild wingdings
          on a shoestring – but it will influence some other choices you make about the size and scale
          of your event. Take a look at our{" "}
          <a href="/how-it-works" className={link}>
            packages
          </a>{" "}
          for a range of party options based on how much scratch you plan to spend.
        </p>

        <h2 className={h2}>Choose a venue</h2>
        <p className={p}>
          The setting you choose will have a powerful impact on the atmosphere and style of your
          event, so make a decision early on in your planning process. If it&apos;s an indoor gig, do
          you want a blank canvas to make your mark on? Or somewhere with an existing character that
          compliments your theme? Either way, be sure to pick a joint that&apos;s large enough to
          accommodate all your furniture, decorations, props and guests.
        </p>
        <p className={p}>
          Mother nature will have much more of a say in how outdoor parties play out, so you need to be
          ready for anything she could throw at you. Make sure you have enough shelter to keep guests
          warm and dry should they need it, or somewhere to stay cool if it&apos;s a scorcher. If you
          plan to continue (or start) after dark, you&apos;ll need outdoor lighting and heating to make
          sure everyone stays comfortable throughout the night.
        </p>

        <h2 className={h2}>Curate your guest list</h2>
        <p className={p}>
          Deciding who you do or don&apos;t want to invite to your party can be a tough balancing act.
          If you fancy a free-for all where crashers are welcome, then let the good times roll! But
          remember this can make your event more difficult to cater for, as numbers are harder to
          predict. Alternatively you could opt for invitation-only to create an air of exclusive
          mystery. A mix of both works well in our experience: invite a set number of people but allow
          for an additional ten percent in your catering plans to cover any extra arrivals.
        </p>
        <p className={p}>
          Next, you need to decide how to invite people. For an authentic 1920&apos;s touch, send your
          guests a secret password they&apos;ll need to use to gain access to your event.
        </p>

        <h2 className={h2}>Pick a theme</h2>
        <p className={p}>
          If your event has a particular theme, remember to let guests know about it in advance. Make
          sure to mention it on your invitations so guys and gals show up in their glad rags, dressed
          down, or come as the Easter Bunny depending what&apos;s appropriate.
        </p>
        <p className={p}>
          Themes work especially well for larger events. If all the different aspects of your party tie
          in to the overall look and feel it creates a polished, stylish impression. A theme also gives
          guests who don&apos;t know each other something to yap about, which helps to break the ice.
        </p>
        <p className={p}>
          For a theme that&apos;s really tip-top, focus on three &apos;big ticket&apos; items that will
          blow the socks off your guests and make your party memorable. You can have some fun here so
          let your imagination run wild – think secret rooms, photo booths, interactive installations
          or unconventional games and prizes.
        </p>

        <h2 className={h2}>Set the mood</h2>
        <p className={p}>
          A party wouldn&apos;t be a party without a soundtrack for your guests to cut a rug to. The
          choice between a live band and playing records is yours. Booking a band adds another
          dimension to the atmosphere with a physical performance, but they tend to be more expensive
          and take up more space. Either way, choose music that fits the theme and ambience of your
          event – a sit-down dinner will call for something much more sedate than a high-energy
          blowout.
        </p>

        <h2 className={h2}>Choose the right food</h2>
        <p className={p}>
          You&apos;ll need to provide your guests with something to keep body and soul together.
          Whether you opt for nibbles, a buffet or full table service will depend on your theme and
          event type. Either way, you need to make sure nobody goes hungry, so be sure to include
          vegetarian and vegan options.
        </p>
        <p className={p}>
          Asking people to respond to your invitation with any allergies or particular dietary
          requirements can help to keep everyone safe. And choosing high quality, locally sourced or
          unusual ingredients can provide an additional talking point.
        </p>

        <h2 className={h2}>Sort something to drink</h2>
        <p className={p}>
          This is the easy part –{" "}
          <a href="#" className={link}>
            just let us handle it for you
          </a>
          !
        </p>
        <p className={p}>
          But if that&apos;s not a possibility, don&apos;t despair. Make sure your guests are greeted
          with a drink as they arrive, and that there&apos;s some noodle juice on offer for the
          non-drinkers as well as booze. Check you have plenty available to keep everyone topped up all
          night. For a real showstopper, offer a signature drink with a personal twist that guests
          can&apos;t get anywhere else.
        </p>

        <h2 className={h2}>Be the host with a toast</h2>
        <p className={p}>
          It might seem obvious, but don&apos;t forget that as the host, you&apos;ll want to have a
          swell time, too! If you can, make sure you have people to help with practicalities on the
          night. This will leave you free to work the room and tip a few with your guests. If
          you&apos;re flying solo, try and prepare as much as you can beforehand. You may be asked to
          say a few words or make a toast, so have a couple of witty one-liners ready to keep yourself
          looking smooth in the spotlight.
        </p>

        <h2 className={h2}>Keep everyone comfortable</h2>
        <p className={p}>
          Don&apos;t forget that guests will need somewhere to iron their shoelaces*. Or that accidents
          can happen when the hooch is flowing and people get too zozzled. Keeping a first aid kit
          close to hand is a wise move, as is having a first-aider in attendance at larger gatherings.
          And if your mob can be a rowdy bunch, it might be worth having security on hand to dish out
          the bum&apos;s rush if need be.
        </p>
        <p className={p}>Happy partying!</p>
        <p className={bestFor}>The Old Fashioned Cocktail Company</p>
        <p className="text-[13px] text-muted">*use the bathroom</p>
      </>
    ),
  },
];
