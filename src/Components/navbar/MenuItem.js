import BrandSidebarItems from "../sidebar/BrandsidebarItem"
import ContentSidebarItem from "../sidebar/ContentSidebarItem"
import FoundationsSidebarItems from "../sidebar/FoundationsSidebarItem"
import PatternsSidebarItem from "../sidebar/PatternsSidebarItem"
import ResourcesSidebarItem from "../sidebar/ResourcesSidebarItem"
import SidebarData from "../sidebar/SidebarData"

const MenuItem =[
    {
        id : 1,
        item : "Brand",
        link : "/ui-docs/brand",
        subItems: BrandSidebarItems
    },
    {
        id : 2,
        item : "Foundations",
        link : "/ui-docs/foundations",
        subItems: FoundationsSidebarItems
    },
    {
        id : 3,
        item : "Components",
        link : "/ui-docs/components",
        subItems: SidebarData
    },
    {
        id : 4,
        item : "Content",
        link : "/ui-docs/content",
        subItems: ContentSidebarItem
    },
    {
        id : 5,
        item : "Patterns",
        link : "/ui-docs/patterns",
        subItems: PatternsSidebarItem
    },
    {
        id : 6,
        item : "Resources",
        link : "/ui-docs/resources",
        subItems: ResourcesSidebarItem
    },
]

export default MenuItem