import { getAllNavItems } from "@/lib/utils/server/redis";
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/shadcn/ui/dropdown-menu";
import Link from "next/link";
export default async function MobileNavBarLinks() {
	const navLinks = await getAllNavItems();

	return (
		<div className="cursor-pointer md:hidden">
			{/* {navLinks.items.map((nav, key) => {
				return (
					<div key={nav.name}>
						{nav.enabled ? (
							<Link href={nav.url}>
								<DropdownMenuItem>{nav.name}</DropdownMenuItem>
							</Link>
						) : null}
					</div>
				);
			})} */}
			{/* <DropdownMenuSeparator></DropdownMenuSeparator>
			<Link className="text-lg lg:text-sm" href={"#about-wehack"}>
				<DropdownMenuItem>About</DropdownMenuItem>
			</Link>
			<Link className="text-lg lg:text-sm" href={"#Testimonials"}>
				<DropdownMenuItem>Testimonials</DropdownMenuItem>
			</Link>
			<Link className="text-lg lg:text-sm" href={"#Sponsors"}>
				<DropdownMenuItem>Sponsors</DropdownMenuItem>
			</Link>
			<Link className="text-lg lg:text-sm" href={"#FAQ"}>
				<DropdownMenuItem>FAQ</DropdownMenuItem>
			</Link>
			<Link className="text-lg lg:text-sm" href={"#Team"}>
				<DropdownMenuItem>Meet the Team</DropdownMenuItem>
			</Link>
			<Link className="text-lg lg:text-sm" href={"http://hackp.ac/coc"} target="_blank">
				<DropdownMenuItem>MLH Conduct</DropdownMenuItem>
			</Link> */}
			
			
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 30;
