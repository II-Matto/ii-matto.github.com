---
layout: post
title: Sparse Shape
ch-title: 基于稀疏表达的形状建模
category: notes
tags: [形状建模, 稀疏编码, SSC, 稀疏形状复合模型]
abstract: Towards Robust and Effective Shape Modeling Sparse Shape Composition (2012 media 22)
index-display: false
---

[Paper] Towards Robust and Effective Shape Modeling Sparse Shape Composition (2012 media 22)

本文探讨的问题是**形状建模**，更确切地说，是如何对已经获得的初步形状进行调整，使之更接近物体的真实形状，也可以理解为是如何进行**形状先验**的建模。本文主要是在医学图像处理的领域考虑这个问题的，针对的是器官的形状。

器官的形状目前一般是基于低层的外观特征来获取的，但是由于器官的病变或者<span class="tooltip" data-info="imaging artifacts">成像过程中的干扰</span>，低层的外观特征可能不足以用来获取准确的形状，甚至可能是误导性的。【？？？】在这种情形下，要想对所获得的初步形状进行正确地调整，**形状先验**就至关重要（人体器官在形状上往往具有非常强的先验信息）。

形状先验的建模主要有3个难点：

(1) **形变的复杂性**：形状本身变化多端，很多时候不能用参数化的概率分布来进行建模。
(2) **初步形状的误差**：通过低层的外观特征所获得的形状，可能和真实形状相比具有很大的误差。
(3) **局部细节的丢失**：某些形状变化模式在训练数据中并不具有统计意义上的重要性，在建模的过程中，这些局部细节就会被忽略掉（比方说PCA）。

为了解决上面这3个难点，本文基于以下2点关于稀疏性的观察，将形状建模问题形式化为一个<span class="tooltip" data-info="a sparse learning problem">稀疏学习问题</span>，通过稀疏形状复合模型（Sparse Shape Composition model, SSC）在统一的框架下予以解决。

(1) 初步形状可以表示为一个<span class="tooltip" data-info="shape repository">形状库</span>中形状的稀疏线性组合（即库中少量形状的线性组合就能表示初步形状）。
(2) 初步形状的某些部分可能有很大的误差，但是这些误差也是稀疏的（即一个形状不会每个部分都出现较大误差）。

具体做法就是：对于一个输入的初步形状，在形状库中选择一个形状的稀疏集合（即只包含有少量形状），然后通过这些形状的复合来对其进行调整。这样一来，先验信息就同时暗含在其中了（这里的先验信息应该就是指选出的少量形状，它们其实是对真实的形状做了假设：真实的形状就和这些形状*差不多*）。

最后就是这个稀疏学习问题的求解，通过L1范数松弛（*L*1 norm relaxation），该问题可以用EM算法高效求解。

实验主要有2个：X光片中肺部的定位（2D），和低剂量（low dose）CT扫描图片中肝部的分割（3D）。
