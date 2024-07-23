import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function ArticleSkeleton() {
    return (
        <div className='mb-3 w-75 mx-auto'>
            <SkeletonTheme color="#fff" highlightColor="#ccc">
                <h2 className='mb-3'><Skeleton /></h2>
                <p className='mb-2'> <Skeleton count={5} /> </p>
            </SkeletonTheme>
        </div>
    );
}
