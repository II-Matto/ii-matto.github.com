---
layout: post
title: Feature Evaluation
ch-title: 特征比较
category: notes
tags: [二值描述子, 局部特征描述子, 论文阅读]
abstract: Comparative Evaluation of Binary Features (2012 ECCV)
index-display: false
last-update: 2013/04/08
---

## Comparative Evaluation of Binary Features (2012 ECCV)

以SIFT/SURF作为baseline，分析二值描述子BRIEF/ORB/BRISK的性能特点。

### 评估项目：
* 影响因素：图像模糊程度，曝光，JPEG压缩，尺度放缩和旋转，平面几何的透视变换，非平面几何的透视变换，单独的旋转/尺度变换/光照变化、白平衡，自动曝光，图像质量
* 以匹配性能为标准，评估检测器和描述子之间的相关性（二者的相关性对于描述子后处理方法具有较大的影响，如RANSAC？？？）

对于不同的影响因素，基于不同的数据集，采用控制变量的方法对特征进行评估

### 性能度量：
* 常用指标：召回率，可重复性（repeatability），1-准确率（1-precision）【缺点：丢失了特征的空间分布信息，以及候选匹配的频率？？？】
* 本文采用的指标：公认匹配率（putative match ratio），准确率，匹配值（match score），召回率，熵【除了已经提出的评估任务，本文还希望能够针对依赖于这些特征的算法，对算法中有关的参数进行评估】

### 匹配标准
ratio style test

研究过局部特征描述子的研究人员：
[Krystian Mikolajczyk][http://personal.ee.surrey.ac.uk/Personal/K.Mikolajczyk/]

## A Performance Evaluation of Local Descriptors (2005 TPAMI 3481)


