import Image from "next/image";
import styles from '@/styles/Home.module.scss'
import Banner, { BannerWithVideo } from "@/components/Banner";
import OurService from '@/components/Home/OurService';
import OurWork from '@/components/Home/OurWork';
import OurClients from '@/components/Home/OurClients';
export default function Home() {
  return (
    <div className={styles.__container}>
      <Banner/>
      <BannerWithVideo/>
      <OurService/>
      <OurWork/>
      <OurClients/>
    </div>
  );
}
