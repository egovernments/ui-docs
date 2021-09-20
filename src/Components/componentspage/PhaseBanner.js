import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'

const PhaseBanner = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Phase Banner</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Phase banner components are used to inform users that the specified service or feature is
                    new and still in the development or testing phase. These banners may also prompt users to
                    provide their feedback on the specified feature or service.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                    Phase Banner
                </Card>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Use the guidelines below to ensure a standardized and uniform design of phase banner
                    components across DIGIT application modules and screens.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use the Panel component to display the completed action status message and
                    acknowledge with specific transaction details.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use this component when the service in question is still in the development phase. The
                    choice of the banner should be in accordance with the current stage of development or
                    testing. For instance, use the alpha banner for alpha state and beta for services or features
                    in the public or private beta domain.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Use the Phase Banner on the top of the page just below the header.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PhaseBanner
