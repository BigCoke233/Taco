/**
 * 页脚
 * 
 * @returns jsx
 */

export default function Footer() {
    return (
      <footer id="footer" className="text-center text-gray-500 text-sm md:flex md:justify-between">
        <section id="copyright">
          <p>&copy; 2019-2023 Eltrac</p>
        </section>
        <section id="icp">
          <p>渝ICP备2023014837号</p>
        </section>
        <section id="info">
          <p>Powered by Taco</p>
        </section>
      </footer>
    )
  }