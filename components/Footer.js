/**
 * 页脚
 * 
 * @returns jsx
 */

import Link from 'next/link'
import Image from 'next/image'

import beian from '@/public/beian.png'

export default function Footer() {
    return (
      <footer id="footer" className="text-center text-gray-500 text-sm
      mt-10 p-5 md:p-0 flex justify-between items-center">
        <section id="copyright">
          <p>&copy; 2019-2023 Eltrac</p>
        </section>
        <section id="icp">
          <p><Link href="https://beian.miit.gov.cn/" target="_blank">渝 ICP 备 2023014837 号</Link></p>
          <p className="align-middle">
            <Image src={beian} alt="备案图标" width={14} height={14} className="inline mr-1" /> 
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=50011702500934" rel="noreferrer" target="_blank">渝公网安备 50011702500934</a>
          </p>
        </section>
        <section id="info" className="hidden md:block">
          <p>Powered by Taco</p>
        </section>
      </footer>
    )
}