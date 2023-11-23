/**
 * 页脚
 * 
 * @returns jsx
 */

import Link from 'next/link'

export default function Footer() {
    return (
      <footer id="footer" className="text-center text-gray-500 text-sm md:flex md:justify-between">
        <section id="copyright">
          <p>&copy; 2019-2023 Eltrac</p>
        </section>
        <section id="icp">
          <p><Link href="https://beian.miit.gov.cn/" target="_blank">渝 ICP 备 2023014837 号</Link></p>
        </section>
        <section id="info">
          <p>Powered by Taco</p>
        </section>
      </footer>
    )
  }