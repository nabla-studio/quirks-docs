import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { inject } from '@vercel/analytics';

if (ExecutionEnvironment.canUseDOM) {
    inject();
}