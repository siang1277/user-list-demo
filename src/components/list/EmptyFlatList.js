import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import EmptyView from '../common/EmptyView';
import LoadingView from '../common/LoadingView';

const EmptyFlatList = (props) => {
    let data = props.data;
    return (
    <View style={[styles.container, props.mainContainerStyle]}>
        <LoadingView
            showLoading={props.showLoading} 
            loadingColor={props.loadingColor}
        />
        {data && data.length > 0?
            <FlatList
                style={[props.listStyle]}
                refreshControl={props.refreshControl}
                data={data}
                ListHeaderComponent={props.ListHeaderComponent}
                numColumns={props.numColumns}
                renderItem={props.renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.name}${index}`}
            />
            :
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.emptyScrollStyle, props.emptyScrollStyle]}
                refreshControl={props.refreshControl}>
                {props.ListHeaderComponent}
                {data && data.length === 0 && !props.showLoading && <EmptyView title={props.emptyTitle}/>}
            </ScrollView>
        }
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  emptyScrollStyle:{
      flex: 1,
  },
});

export default EmptyFlatList;
