import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, date, boolean, number } from '@storybook/addon-knobs';
import { TopicsList, TopicListItem } from '../client/components/Topics';

const stories = storiesOf('Topics', module);

stories.addDecorator(withKnobs);



stories.add('Topics List', () => (
  <TopicsList />
));

stories.add('List Item', () => {
  const topic = {
    "id": "5cbfd9aca86ae80ce64b3175",
    "author_id": "4f447c2f0a8abae26e01b27d",
    "tab": "share",
    "content": "<div class=\"markdown-text\"><h2>前言</h2>\n<p>时隔一年，Node.js 12 如约而至，正式发布第一个 <a href=\"https://github.com/nodejs/Release\">Current</a> 版本。</p>\n<p>该版本带来了诸如：</p>\n<ul>\n<li>V8 更新带来好多不错的特性。</li>\n<li>HTTP 解析速度提升。</li>\n<li>启动速度大幅提升。</li>\n<li>更好的诊断报告和堆分析工具。</li>\n<li>ESM 模块更新。</li>\n</ul>\n<p>原文地址：<a href=\"https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f\">https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f</a>\n语雀地址：<a href=\"https://www.yuque.com/egg/nodejs/nodejs-12\">https://www.yuque.com/egg/nodejs/nodejs-12</a></p>\n<h2>LTS vs Current</h2>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2019/png/84182/1556074709431-35af45b8-ec7a-4a81-83d8-155eb519f04a.png#align=left&amp;display=inline&amp;height=389&amp;name=image.png&amp;originHeight=500&amp;originWidth=960&amp;size=58313&amp;status=done&amp;width=746\" alt=\"image.png\"></p>\n<p>如果你不了解 Node.js 的  Long Term Support 发布策略的话，一定要看看 <a href=\"https://github.com/nodejs/Release\">https://github.com/nodejs/Release</a> 。</p>\n<p>就目前而言，Node.js 6.x 和 8.x 将在 2019 年末结束 LTS 的支持，大家尽快升级到 10.x 吧。</p>\n<h2>快速体验</h2>\n<pre class=\"prettyprint language-bash\"><code>$ nvs add node&#x2F;12\n$ nvs use 12\n$ node -v\nv12.0.0\n</code></pre><p>具体参考这篇文章：<a href=\"https://zhuanlan.zhihu.com/p/63403762\">科普文：使用 nvs 管理本地 Node.js 版本</a></p>\n<h2>V8 更新到 7.4</h2>\n<blockquote>\n<p>大部分情况下，我们不用去考虑性能问题，坐等 V8 版本更新就好了。（大雾）</p>\n</blockquote>\n<p>本次版本更新，也带来了好几个不错的特性：</p>\n<ul>\n<li><a href=\"https://v8.dev/blog/v8-release-72#async-stack-traces\">异步堆栈跟踪</a></li>\n<li><a href=\"https://v8.dev/blog/v8-release-74#faster-calls-with-arguments-mismatch\">参数调用不匹配时的调用速度优化</a></li>\n<li><a href=\"https://v8.dev/blog/v8-release-73#faster-await\">更快的 await</a></li>\n<li><a href=\"https://v8.dev/blog/v8-release-72#javascript-parsing\">更快的 JavaScript 解析速度</a></li>\n</ul>\n<p><strong>同时，跑了下我们 Egg 的一些内部测试，发现序列化有 10~20% 的性能提升，恐怖如斯！</strong></p>\n<p>另，奇丑无比的 <a href=\"https://github.com/tc39/proposal-class-fields\">Private Class Fields</a> 也能用了：</p>\n<pre class=\"prettyprint language-javascript\"><code>class IncreasingCounter {\n  #count = 0;\n  \n  get value() {\n    console.log(&#x27;Getting the current value!&#x27;);\n    return this.#count;\n  }\n  increment() {\n    this.#count++;\n  }\n}\n</code></pre><h2>HTTP 解析速度提升</h2>\n<p>默认的 HTTP 解析器切换为 <a href=\"https://github.com/nodejs/llhttp\">llhttp</a> ，性能提升恐怖如斯：</p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2019/png/84182/1556072499637-686bb0e3-c75c-424c-851f-ad88aff183a2.png#align=left&amp;display=inline&amp;height=231&amp;name=image.png&amp;originHeight=404&amp;originWidth=1302&amp;size=88775&amp;status=done&amp;width=746\" alt=\"image.png\"></p>\n<blockquote>\n<p>点评：恐怖如斯。</p>\n</blockquote>\n<h2>启动速度提升</h2>\n<p>通过 <a href=\"https://v8.dev/blog/code-caching\">v8 code cache</a> 的支持，<a href=\"https://github.com/nodejs/node/pull/27161\">在构建时提前为内置库生成代码缓存</a>，从而提升 30% 的启动耗时。\n同时，通过<a href=\"https://github.com/nodejs/node/pull/24950\">重用主进程缓存</a>，Workers Threads 的启动速度提升了 60% 。</p>\n<blockquote>\n<p>点评：恐怖如斯。</p>\n</blockquote>\n<h2>Workers Threads</h2>\n<p>在 10.x 已经引入的 <a href=\"https://nodejs.org/api/worker_threads.html\">Workers Threads</a> 特性，在 12.x 里面默认启用，无需使用 <code>--experimental-worker</code> 开启。同时基于上一条的介绍，启动的速度也得到大幅提升。</p>\n<p>相关介绍：<a href=\"https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6\">https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6</a></p>\n<h2>诊断报告</h2>\n<p>提供了新的实验性功能『诊断报告』，一个非常有用的特性。\n可用于帮助分析诸如：崩溃，性能问题，内存泄漏，高 CPU 占用等等问题。详见 <a href=\"https://medium.com/the-node-js-collection/easily-identify-problems-in-node-js-applications-with-diagnostic-report-dc82370d8029\">这篇文章</a>。</p>\n<blockquote>\n<p>点评：这也是 <a href=\"https://www.aliyun.com/product/nodejs\">AliNode</a> 之前的一个卖点之一。</p>\n</blockquote>\n<h2>Heap Dump</h2>\n<p>以前我们分析问题的时候，需要手动安装对应的类库或者使用 AliNode。</p>\n<p>在 12.x 里面内置了该功能，详见：</p>\n<ul>\n<li><a href=\"https://github.com/nodejs/node/pull/27133\">https://github.com/nodejs/node/pull/27133</a></li>\n<li><a href=\"https://github.com/nodejs/node/pull/26501\">https://github.com/nodejs/node/pull/26501</a></li>\n</ul>\n<blockquote>\n<p>点评：又一个 <a href=\"https://www.aliyun.com/product/nodejs\">AliNode</a> 的功能被内置了。但其实影响不大，AliNode 的核心在于分析平台，这块的采集能力，本来他们就打算开源回馈出去的。</p>\n</blockquote>\n<p>同时，由于上述提到的 V8 升级，现在可以按照可用内存动态调整堆大小了。</p>\n<h2>ESM 模块方案更新</h2>\n<p>ES6 模块仍然还在实验阶段，不过有了新的方式，具体参见<a href=\"https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff\">这篇文章</a>。</p>\n<blockquote>\n<p>点评：让子弹再飞一会，该特性真的不是痛点，不急。</p>\n</blockquote>\n<h2>其他更新</h2>\n<ul>\n<li>更好的原生模块支持，<a href=\"https://nodejs.org/api/n-api.html#n_api_n_api\">N-API</a> 升级为版本 4，并 backport 到 Node.js 8.x 和 10.x。详细参见<a href=\"https://medium.com/the-node-js-collection/new-features-bring-native-add-ons-close-to-being-on-par-with-js-modules-cd4f9b8e4b4\">这篇文章</a>。</li>\n<li>TLS 升级为 1.3， <a href=\"https://developer.ibm.com/blogs/openssl-111-has-landed-in-nodejs-master-and-why-its-important-for-nodejs-lts-releases/\">增强安全功能</a>。</li>\n<li>随着 C++ 编译器的更新，现在要求 <code>GCC 6</code> 和 <code>glibc 2.17</code> ，对应的操作系统 Win7 和 macOS 10，详细参见<a href=\"https://github.com/nodejs/node/blob/v12.x/BUILDING.md#platform-list\">这篇文章</a>。</li>\n</ul>\n<p>不过目前 node-gyp 的一些原生模块会编译失败：</p>\n<pre class=\"prettyprint language-bash\"><code>nunjucks@3.2.0 › chokidar@2.1.5 › fsevents@^1.2.7 optional error: Error: Run &quot;sh -c node install&quot; error, exit code 1\n    at ChildProcess.&lt;anonymous&gt; (&#x2F;Users&#x2F;tz&#x2F;.npm-global&#x2F;lib&#x2F;node_modules&#x2F;tnpm&#x2F;node_modules&#x2F;_runscript@1.3.0@runscript&#x2F;index.js:74:21)\n    at ChildProcess.emit (events.js:196:13)\n    at maybeClose (internal&#x2F;child_process.js:1000:16)\n    at Process.ChildProcess._handle.onexit (internal&#x2F;child_process.js:267:5)\n</code></pre></div>",
    "title": text('Title', "Node 12 值得关注的新特性"),
    "last_reply_at": "2019-07-12T04:34:56.342Z",
    "good": false,
    "top": boolean("Top", true),
    "reply_count": number("Reply", 53),
    "visit_count": number("Visit", 57314),
    "create_at": date("Created at", new Date("2019-04-24T03:36:12.582Z")),
    "author": {
      "loginname": text('Author', "atian25"),
      "avatar_url": text('Avatar Link', "https://avatars2.githubusercontent.com/u/227713?v=4&s=120")
    }
  };
  return <TopicListItem topic={topic} />;
})
