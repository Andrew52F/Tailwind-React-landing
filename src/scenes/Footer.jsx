import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-48 bg-red">
      <div className="w-5/6 mx-auto pt-4">
        <SocialMediaIcons />
        <div className="md:flex md:justify-between text-center">
          <p className="font-playfair font-semibold text-yellow text-2xl">JANE ESPER</p>
          <p className="font-playfair text-md text-yellow">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;