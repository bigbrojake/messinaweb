import Manifesto from '../components/about/Manifesto';
import TeamGrid from '../components/about/TeamGrid';
import CommunityImpact from '../components/about/CommunityImpact';
import CoreValues from '../components/about/CoreValues';

export default function About() {
    return (
        <div className="w-full bg-background">
            <Manifesto />
            <TeamGrid />
            <CommunityImpact />
            <CoreValues />
        </div>
    );
}
