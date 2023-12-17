/**
 * 自述
 * 
 * @return jsx
 */

export default function AboutMe({ text }) {
    return (
      <section id="about" className="px-3 py-8 md:px-8 md:py-4 pt-0 md:flex md:gap-10 md:items-center">
        <img src="https://image.guhub.cn/isla.webp"
          height={200} width={200} style={{width: 300}} 
          className="block mx-auto md:inline flex-shrink-0 dark:invert"
          alt="Cabin on an island."
         />
        <article id="about-content" className="text-lg">
          <p className="text-gray-700 text-center md:text-left">{text.names}</p>
          <p className="text-xl my-5 font-semibold">{text.des}</p>
          <p className="text-center md:text-left">{text.character}</p>
        </article>
      </section>
    )
}